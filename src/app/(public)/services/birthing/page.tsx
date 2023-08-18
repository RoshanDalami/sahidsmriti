"use client";
import Image from "next/image";
import BirthingImage from "../../../../../public/assets/icons/birthing.svg";
import { MdBabyChangingStation } from "react-icons/md";
import { Birthing } from "../../../../../public/Data/birthing";
import ActionAreaCardStaff from '../../Components/StaffCard';

export default function BirthingPage() {
  return (
    <div>
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
          <Image src={BirthingImage} alt="birthing" />
        </section>
        <section className="text-white p-6 ">
          <p className="text-4xl text-medium ">
            Welcome to Our Tranquil Birthing Center
          </p>
          <span className=" md:text-justify ">
            At our birthing center, we celebrate the miracle of childbirth by
            providing expectant parents with a serene and supportive environment
            for this extraordinary journey. Our team of experienced and
            compassionate midwives, nurses, and healthcare professionals is
            dedicated to making your birthing experience truly special.
          </span>
        </section>
      </div>
    </div>
    <h1 className="py-4 text-center text-3xl  ">Our Birthing Center Staff</h1>
    <div className="flex items-center justify-center flex-wrap">
      {
        Birthing && Birthing.map((item)=>{
        return(
          <ActionAreaCardStaff key={item.id} title={item.title} description={item.degniation} image={item.image} />
          )  
          
        })
      }
    </div>
    </div>
  );
}
