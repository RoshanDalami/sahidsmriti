"use client";
import { TbHeartRateMonitor } from "react-icons/tb";
import Image from "next/image";
import USGImage from "../../../../public/assets/sonography.png";

export default function UsgPage() {
  return (
    <div>
      <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <p className=" text-white">Sahidsmriti Samudayik Hospital</p>
          <h1 className=" text-white text-3xl font-bold">
            Our Ultrasonography Service
          </h1>
        </div>
        <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
          Ultrasonography Services
        </h1>
        <TbHeartRateMonitor className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
      </div>
      <div className="bg-rose-600 flex flex-col md:flex-row">
        <section className="md:w-[900px]">
          <Image src={USGImage} alt="Ultarsonography image" />
        </section>
        <section className=" flex flex-col justify-center">
          <p className="text-2xl  py-4 text-center  text-white ">
            🔍 Discover the Hidden World Within: Ultrasonography Services 🔍
          </p>
          <span className=" text-justify p-10  text-white">
            Welcome to our ultrasonography department, where cutting-edge
            technology meets the art of diagnostic imaging. We are dedicated to
            providing you with a window into your body, offering a non-invasive
            and safe way to visualize internal structures, organs, and tissues.
          </span>
        </section>
      </div>
    </div>
  );
}
