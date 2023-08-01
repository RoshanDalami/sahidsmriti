"use client";
import Image from "next/image";
import Birthing from "../../../../public/assets/icons/birthing.svg";
import { MdBabyChangingStation } from "react-icons/md";

export default function BirthingPage() {
  return (
    <div className="bg-rose-600">
      <div className=" h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <p className=" text-white">Sahidsmriti Samudayik Hospital</p>
          <h1 className=" text-white text-3xl font-bold">
            Our Birthing Service
          </h1>
        </div>
        <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
          Birthing Services
        </h1>
        <MdBabyChangingStation className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
      </div>
      <div className="flex flex-col md:flex-row">
        <section>
          <Image src={Birthing} alt="birthing" />
        </section>
        <section className="text-white p-6 ">
          <p className="text-4xl text-medium ">
            Welcome to Our Tranquil Birthing Center
          </p>
          <span className=" text-justify ">
            At our birthing center, we celebrate the miracle of childbirth by
            providing expectant parents with a serene and supportive environment
            for this extraordinary journey. Our team of experienced and
            compassionate midwives, nurses, and healthcare professionals is
            dedicated to making your birthing experience truly special.
          </span>
        </section>
      </div>
    </div>
  );
}
