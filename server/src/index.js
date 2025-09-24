import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || 'mongodb+srv://nitinkumar:<OspZPOw3crSL9TM7>@cluster0.cjl2vuo.mongodb.net/';

mongoose.connect(MONGO, { dbName: 'swadeshi' })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const reservationSchema = new mongoose.Schema({
  userId: String,
  userEmail: String,
  placeName: String,
  placeType: String,
  price: Number,
  days: Number,
  origin: String,
  destination: String,
  createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

app.post('/api/reservations', async (req, res) => {
  try {
    const data = req.body;
    const r = new Reservation(data);
    await r.save();
    res.status(201).json({ success: true, reservation: r });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to save reservation' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
