"use client";
import { TbMassage,TbHeartRateMonitor } from "react-icons/tb";

export default function PhysiotherapyPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Physiotherapy Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
            Physiotherapy Services
            </h1>
            <TbMassage className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
            <h1>Physiotherapy Page</h1>

        </div>
    )
}