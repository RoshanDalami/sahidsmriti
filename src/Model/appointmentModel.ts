import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    number:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    },})

const Appointments = mongoose.models.appointments || mongoose.model("appointments", appointmentSchema);

export default Appointments;