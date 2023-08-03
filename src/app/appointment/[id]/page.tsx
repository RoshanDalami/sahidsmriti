'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from 'axios'
import { useParams } from "next/navigation";

export default function AppointmentDetails(){
    const[details,setDetails] = useState({
        name:'',
        number:'',
        email:'',
        date:'',

    });
    const {id} = useParams();
    const getDetails = async()=>{
        try {
            const response = await axios.get(`../api/appointments/appointment/${id}`);
            setDetails(response.data)
        } catch (error:any) {
            console.log('error')
        }
    }
    useEffect(()=>{
        getDetails();
    },[])
    
    return(
        <>
        <div className="flex flex-col justify-center items-center">

        <h1 className="text-2xl text-center">Patient Details</h1>
        <div className="bg-slate-400 w-[800px] mx-auto mt-10 p-10 text-white rounded-lg" >
            <h1 className="text-xl">
                Patient Name : { details.name}
            </h1>
            <h1 className="text-xl">
                Patient Email : {details.email}
            </h1>
            <h1 className="text-xl">
                Patient Mobile : {details.number}
            </h1>
            <h1 className="text-xl">
                Booking Date : {details.date}
            </h1>
            
        </div>
        <Link href={'/appointment'} >
        <button className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 mt-10">

        View Appointments
        </button>
        </Link>
        </div>

        </>
    )
}