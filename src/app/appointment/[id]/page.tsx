'use client';

import { useEffect, useState } from "react";

import axios from 'axios'
import { useParams } from "next/navigation";

export default function AppointmentDetails(){
    const[details,setDetails] = useState({});
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
        <div className="bg-slate-500 w-[400px] mx-auto" >
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

        </>
    )
}