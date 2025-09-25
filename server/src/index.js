import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/user.js';
import Reservation from './models/reservation.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI;

mongoose.connect(MONGO, { dbName: 'swadeshi' })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Register User Route (for traditional login)
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'User already exists' });
        }
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully', user: { email: newUser.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Failed to register user' });
    }
});

// Login User Route (for traditional login)
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ success: false, error: 'Invalid email or password' });
        }
        user.lastLoginAt = new Date();
        await user.save();
        res.status(200).json({ success: true, message: 'Login successful', user: { email: user.email, lastLoginAt: user.lastLoginAt } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Failed to login' });
    }
});

// New route to handle user data from Clerk
app.post('/api/save-clerk-user', async (req, res) => {
    try {
        const { email, clerkId } = req.body;
        if (!email || !clerkId) {
            return res.status(400).json({ success: false, error: 'Email and Clerk ID are required' });
        }
        const existingUser = await User.findOne({ clerkId });
        if (existingUser) {
            existingUser.lastLoginAt = new Date();
            await existingUser.save();
            return res.status(200).json({ success: true, message: 'User updated successfully', user: existingUser });
        }
        const newUser = new User({
            email: email,
            clerkId: clerkId,
            lastLoginAt: new Date(),
        });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error('Error saving user data:', err);
        res.status(500).json({ success: false, error: 'Failed to save user data' });
    }
});

// Final Corrected API endpoint to save reservation data
app.post('/api/reservations', async (req, res) => {
    console.log('Received reservation request body:', req.body);
    try {
        const { placeName, placeType, price, days, destination, clerkId } = req.body;

        if (!clerkId || !placeName || !placeType || !price || !days || !destination) {
            console.error('Missing fields in reservation request');
            return res.status(400).json({ success: false, error: 'All reservation details and user ID are required' });
        }

        const user = await User.findOne({ clerkId });
        console.log('Found user:', user);

        if (!user) {
            console.error('User not found for clerkId:', clerkId);
            return res.status(404).json({ success: false, error: 'User not found. Please log in first.' });
        }
        
        console.log('User found with MongoDB _id:', user._id);
        
        const newReservation = new Reservation({
            placeName,
            placeType,
            price,
            days,
            destination,
            user: user._id, // This is correct, saves the user's ObjectId
        });

        const savedReservation = await newReservation.save();
        console.log('Successfully saved reservation:', savedReservation);

        res.status(201).json({ success: true, message: 'Reservation created successfully', reservation: savedReservation });
    } catch (err) {
        console.error('Final catch block error:', err);
        res.status(500).json({ success: false, error: 'Failed to save reservation' });
    }
});


app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));