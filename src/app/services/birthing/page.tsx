"use client";
import Image from "next/image";
import Birthing from '../../../../public/assets/icons/birthing.svg'
import { MdBabyChangingStation } from "react-icons/md";

export default function BirthingPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Birthing Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                Birthing Services
            </h1>
            <MdBabyChangingStation className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
            <section>
                <Image src={Birthing} alt="birthing" />
            </section>
            <section>
                    <p>
                        
                    </p>
            </section>

        </div>
    )
}