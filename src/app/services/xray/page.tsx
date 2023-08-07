"use client";
import Image from "next/image";
import radioImage from '../../../../public/assets/icons/undraw_medical_research_qg4d.svg'
import { Radiographer } from "../../../../public/Data/Radiographer";
import { LiaXRaySolid } from "react-icons/lia";

import Card from '@/app/Components/Card';
export default function XrayPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our X-ray Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                X-ray Services
            </h1>
            <LiaXRaySolid className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>

            <div className="bg-rose-600 p-4 flex flex-col md:flex-row ">
            <Image src={radioImage} alt="radiographer svg image" className="w-[500px]"/>
            <p className="ml-5 p-6 text-white md:text-justify text-base md:text-xl md:font-medium ">
            Radiography is a diagnostic imaging technique that utilizes X-rays to create detailed images of the internal structures of the human body. It plays a crucial role in modern medicine, helping healthcare professionals diagnose and monitor various medical conditions and injuries. During a radiographic examination, a controlled dose of X-rays passes through the body and is absorbed differently by various tissues, producing an image on a detector or film. Dense structures like bones appear white, while softer tissues appear in shades of gray, allowing healthcare providers to visualize abnormalities, fractures, tumors, or other conditions. Radiography is a non-invasive and widely used tool, providing valuable insights for accurate medical assessments and treatment planning.
            </p>
            </div>

            <h1 className="text-xl mt-4 text-center">Our Radiographer</h1>

            <div className="flex flex-wrap justify-center">
                {
                    Radiographer && Radiographer.map((item)=>{
                        return <Card key={item.id} title={item.title} image={item.image} description={item.degnation}  />
                    })
                }
            </div>




        </div>
    )
}