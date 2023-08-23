'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
export default function EventsPage(){
    const [data,setData] = useState([]);
    

    const getEvents = async()=>{
        try {
            const reponse = await axios.get('api/upload');
            const data = await reponse.data;
            setData(data)
        } catch (error:any) {
            console.log('Error')
        }
    }
    useEffect(()=>{
        getEvents();
    },[data])

    return(
        <div>
            <h1 className="text-2xl p-4 m-4 font-bold opacity-60">
                Events And News
            </h1>
            <div className="flex flex-wrap items-center justify-center">
        {data.length !== 0 ? (
          data.map((item: any) => {
            return (
              <Link href={`events/${item._id}`} className="" key={item._id}>
                
              <div  className="bg-white p-4 rounded m-2 w-[300px] shadow-lg ">
                <Image src={item.fileurl} alt="" width={400} height={400} className=" align-middle" />
                <div>
                  <h1 className="text-black text-lg font-bold m-2">{item.title}</h1>
                </div>
              </div>
              </Link>
            );
          })
        ) : (
          <p className=" font-bold text-xl my-5"> No Event ... </p>
        )}
      </div>
        </div>
    )
}