
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    number: {
        type: Number,
        required: [true, "Please provide a username"],
        unique: true,
    },
    date: {
        type: Date,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    message: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    
 
})

const Appointments = mongoose.models.appointments || mongoose.model("appointments", appointmentSchema);

export default Appointments;