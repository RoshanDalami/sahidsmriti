'use client';
import { LiaAmbulanceSolid } from "react-icons/lia";
import Image from "next/image";
import ambulance from '../../../../public/assets/ambulance/ambulance.jpg'
export default function AmbulancePage(){
    return(
       <div>
        <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Ambulance Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                Ambulance Services
            </h1>
            <LiaAmbulanceSolid className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
        <div className="flex justify-between flex-col md:flex-row">

        <div className="w-[400px] h-[300px] justify-center md:w-[800px] ">
            <Image src={ambulance} alt=""/>
        </div>
        <div className="bg-rose-600 w-full flex items-center p-7 justify-center rounded-b-lg ">
            <h1 className="text-4xl  text-white opacity-50 md:mr-10 font-bold ">Ambulance Contact : <span className="text-2xl"> +9779867019999,
+9779857080725  </span> </h1>
        </div>
        </div>
       </div>
    )
}