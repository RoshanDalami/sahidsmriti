'use client';
import { Lab } from "../../../../../public/Data/Lab";
import Card from '@/app/(public)/Components/Card';
import Image from "next/image";
import { GiTestTubes } from "react-icons/gi";
import labImage from '../../../../../public/assets/lab.svg'
import ActionAreaCardStaff from "../../Components/StaffCard";
export default function LabPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col items-center md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our  Laboratory Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
            Laboratory Services
            </h1>
            <GiTestTubes className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
        <div className="flex flex-col items-center md:flex-row bg-rose-600  ">
            <section >
            <Image src={labImage} alt="" />
            </section>
            <section className=" text-white ">
                <p className=" p-4 md:text-justify">
                    We provide best possible lab results our high-tech machines. We do all kinds of testing Blood , Urine , Platelets Count etc.
                    Our Lab technicians are highly qualified and best at there job. !
                </p>
            </section>
        </div>


        
<div className="flex items-center justify-center p-3">

        <h1 className="text-4xl ">Our Lab Assistant</h1>
</div>
        <div className="flex flex-wrap justify-center">
            {
                Lab && Lab.map((item)=>{
                    return <ActionAreaCardStaff key={item.id} title={item.title} image={item.image} description={item.degnation}  />
                })
            }
        </div>




    </div>
    )
}