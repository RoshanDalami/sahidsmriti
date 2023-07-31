'use client';
import { Lab } from "../../../../public/Data/Lab";
import Card from '@/app/Components/Card';
import { GiTestTubes } from "react-icons/gi";

export default function LabPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our  Laboratory Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
            Laboratory Services
            </h1>
            <GiTestTubes className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
        <h1>Our Lab Assistant</h1>
        

        <div className="flex flex-wrap justify-center">
            {
                Lab && Lab.map((item)=>{
                    return <Card key={item.id} title={item.title} image={item.image} description={item.degnation}  />
                })
            }
        </div>




    </div>
    )
}