import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 characters."],
        maxLength: [30, "First name cannot be exceed 30 characters."],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 characters."],
        maxLength: [30, "First name cannot be exceed 30 characters."],
    },
    date: { 
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must be contain 11 Digits."],
        maxLength: [11, "Phone number must be contain 11 Digits."],

    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);