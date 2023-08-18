"use client";
import { useState } from "react";
import { AiOutlineHistory } from "react-icons/ai";
import { LiaAmbulanceSolid } from "react-icons/lia";
import {BiTimer} from 'react-icons/bi'
import {BsFillBalloonHeartFill} from 'react-icons/bs';
import toast from "react-hot-toast";
import axios from 'axios';

export default function BookingForm() {
    const [appointment , setAppointment]=useState({
      name:'',
      number:'',
      date: '',
      email:'',
      message:''
    })
    const[notNumber,setNotPhoneNumber] = useState(false)
    const [loading,setLoading]=useState(false);
    const onSubmitHandler = async (e:any)=>{
       try {
        e.preventDefault();
        setLoading(true)

        if( appointment.number.length !== 10 ){
            setNotPhoneNumber(true)
            return
        }
        const response = await axios.post('api/appointments/booking',appointment);
        toast.success('Your Appointment Has been booked')

          setAppointment({
            name:'',
            number:'',
            date: '',
            email:'',
            message:''
          })
       } catch (error:any) {
        toast.error('Appointment Booking Failed...')
        console.log('Appointment Booking failed ...',error.message)
       }
       finally{
        setLoading(false)
       }
    }



  return (
    <div className="flex justify-evenly bg-rose-700 px-10 py-7 text-white  flex-wrap" id="#booking">
      <div >
        <span className="text-xl ">Online Inquiry</span>
        <br />
        <span className="text-3xl font-bold opacity-30">
          Request an Appointment
        </span>
        <form action="" onSubmit={onSubmitHandler}  className="flex flex-col text-black justify-between">
          <div className="my-3">
            <input
              type="text"
              placeholder="Patient Name"
              className="px-4 w-full py-2 rounded"
              required
              onChange={(e)=>setAppointment({...appointment,name:e.target.value})}
              value={ appointment.name}
            />
          </div>
          <div className="my-3">
            <input
              type="Number"
              placeholder="Phone Number"
              className="px-4 w-full py-2 rounded"
              required
              
              onChange={(e)=>setAppointment({...appointment,number:e.target.value})}
              value={appointment.number}
            />
           {notNumber && <p className=" text-white">Please enter valid phone number</p>}
          </div>
          <div className="my-3">
            <input
              type="date"
              placeholder="Appointment Date"
              className="px-4 w-full py-2 rounded"
              required
              onChange={(e)=>setAppointment({...appointment,date:e.target.value})}
              value={appointment.date}
            />
          </div>
          <div className="my-3">
            <input
              type="email"
              placeholder="Email"
              className="px-4 w-full py-2 rounded"
              required
              onChange={(e)=>setAppointment({...appointment,email:e.target.value})}
              value={appointment.email}
            />
          </div>
          <div className="my-3">
            <textarea
              placeholder="Explain your Problem"
              className="px-4 w-full py-2 rounded"
              required
              onChange={(e)=>setAppointment({...appointment,message:e.target.value})}
              value={appointment.message}
            />
          </div>
          <button  type="submit" className="px-3 py-2 bg-blue-600 rounded text-white font-medium hover:bg-sky-500" >
            {loading ?"Booking...":"Book Now"}
          </button>
        </form>
      </div>
      <div className="w-[700px] mt-4 ">
        <span className="text-3xl font-bold opacity-30">Why Us</span>
        <br />
        <span className="text-4xl font-bold">Why Choose Us</span>
        <br />
        <span>
          Several reasons to choose us to take care of you. Patients get
          discharged with a smile and we are happy to make everyone smile.
        </span>
        <hr />
        <div className="cursor-pointer">

        <div className="flex mt-7  bg-rose-700 hover:bg-rose-500 px-5 py-3 rounded items-center ">
          <AiOutlineHistory className="text-4xl" />
          <div className="ml-10 flex flex-col">
            <span className= "text-2xl">Glorious History</span>
            <span>initiated in 2064 BS, as a community hospital</span>
          </div>
        </div>
        <div className="flex  hover:bg-rose-500 px-5 py-3 rounded items-center ">
          <LiaAmbulanceSolid className="text-4xl" />
          <div className="ml-10 flex flex-col">
            <span className=" text-2xl">Ambulance Servcice</span>
            <span>Fastest and the safest ambulance service.</span>
          </div>
        </div>
        <div className="flex  hover:bg-rose-500 px-5 py-3 rounded items-center ">
          <BiTimer className="text-4xl" />
          <div className="ml-10 flex flex-col">
            <span className="text-2xl">24/7/365 Services</span>
            <span>We are ready to take care of you anytime anywhere.</span>
          </div>
        </div>
        <div className="flex  hover:bg-rose-500 px-5 py-3 rounded items-center ">
          <BsFillBalloonHeartFill className="text-4xl" />
          <div className="ml-10 flex flex-col">
            <span className="text-2xl">Happy Patients. Happy Guests.</span>
            <span>Everybody happy with our services</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
