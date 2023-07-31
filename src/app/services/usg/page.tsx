"use client";
import { TbHeartRateMonitor } from "react-icons/tb";

export default function UsgPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Ultrasonography Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
            Ultrasonography Services
            </h1>
            <TbHeartRateMonitor className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
            <h1>usg page</h1>

        </div>
    )
}