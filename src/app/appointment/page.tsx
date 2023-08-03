'use client';


import axios from 'axios'
import { useEffect, useState } from 'react';


export default function AppointmentPage(){
    const [data,setData] = useState([]);

    const getData = async()=>{
        const response = await axios.get('api/appointments/appointment');
        const data = await response.data
        setData(data)
        
    }
    useEffect(()=>{
        getData();
    },[])

    return(
        <div>
           {
                 data.map((item:any)=>{
                    return (
                        <li key={item._id}>
                            {item.name}
                        </li>
                    )
                 }) 
            }
        </div>
    )
}