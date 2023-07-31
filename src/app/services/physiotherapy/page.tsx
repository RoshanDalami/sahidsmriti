"use client";
import { TbMassage, TbHeartRateMonitor } from "react-icons/tb";
import Image from "next/image";
import image from "../../../../public/assets/physio.png";
export default function PhysiotherapyPage() {
  return (
    <div>
      <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <p className=" text-white">Sahidsmriti Samudayik Hospital</p>
          <h1 className=" text-white text-3xl font-bold">
            Our Physiotherapy Service
          </h1>
        </div>
        <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
          Physiotherapy Services
        </h1>
        <TbMassage className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
      </div>
      <div className="bg-rose-600 flex flex-col  text-white md:flex-row">
        <section className="md:w-[700px]">
          <Image src={image} alt="" />
        </section>
        <section className="px-10">
          <p className="text-[30px]">
            {" "}
            Embrace Movement, Embrace Wellness: Discover Physiotherapy with Us!
          </p>
          <span className="text-justify">
            Welcome to our physiotherapy clinic, where healing and empowerment
            through movement are at the core of our approach to healthcare. Our
            team of dedicated and skilled physiotherapists is committed to
            helping you regain strength, mobility, and overall well-being
            through personalized and evidence-based treatments.
          </span>
        </section>
      </div>
    </div>
  );
}
