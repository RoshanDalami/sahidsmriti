'use client';

import { useState } from "react";
import axios from 'axios'

export default function AppointmentDetails({params}:any){
    const[details,setDetails]= useState({});
    
    return(
        <div>
            <h1 className="bg-black text-white text-4xl">
                {params.id}
            </h1>
        </div>
    )
}