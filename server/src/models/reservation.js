import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true,
    },
    placeType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    days: {
        type: Number,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    // Reference to the User model using clerkId
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;