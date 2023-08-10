"use client";

import { Doctor } from "../../../../public/Data/Doctor";
import Card from "@/app/(public)/Components/Card";
import { FaUserDoctor } from "react-icons/fa6";

export default function DoctorPage() {
  return (
    <div>
      <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Dedicated Doctors</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                Doctors
            </h1>
            <FaUserDoctor className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
        <div className="flex justify-center">

      <p className="bg-white  p-4 md:text-justify    w-[1100px]  "  >
      Sahidsmriti Samudayik Hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to minor surgery
      </p>
        </div>
        <h1 className="text-center text-3xl my-3">Our Doctors</h1>
      <div className="flex flex-wrap justify-center my-10  ">


        {Doctor &&
          Doctor.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    </div>
  );
}
