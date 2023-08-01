"use client";

import SpecialRouteList from "@/app/Components/SpecialRouteList";

import Image from "next/image";
import physicianImage from '../../../../public/assets/physician/physician.png'





export default function GeneralPage() {
  return (
    <div>
      <SpecialRouteList/>
      <div className="bg-rose-600 p-10 flex flex-col md:flex-row">

      <div className="md:w-[1000px] " >
        <Image src={physicianImage} alt="" />
      </div>

      <div className="text-white flex flex-col justify-center mt-4 md:p-5">
        <h1 className="text-3xl">Timing : </h1>
        <p className="text-3xl  py-4 text-center "> Your Trusted Health Partner: Meet Our General Physician</p>
        <p className=" text-justify p-10">
        Welcome to our practice, where compassionate and comprehensive healthcare is at the heart of everything we do. Our General Physician, a medical expert with broad training and experience, is your go-to partner for all your primary healthcare needs.
        </p>

      </div>
      </div>
      
    </div>
  );
}
