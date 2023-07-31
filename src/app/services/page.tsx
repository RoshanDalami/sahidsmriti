"use client";

import RoundedCard from "../Components/RoundedCard";
import { ServicePath } from "../../../public/Data/path";
import { GiDna2 } from "react-icons/gi";
export default function ServicePage(){
   
    
    return(
        <div className="flex flex-col justify-center ">
            
        <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Specialities</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                Services
            </h1>
            <GiDna2 className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
        <div className="p-8 flex flex-col md:flex-row flex-wrap justify-center ">
            {ServicePath && ServicePath.map((item)=>{
                return <RoundedCard key={item.id} title={item.title} icon={item.image} path={item.path} id={item.id} />
            })}
            
        </div>
        </div>
    )
}