import React from "react";
import { PiToothThin } from "react-icons/pi";
import { Dental } from "../../../../../public/Data/Dental";
import Image from "next/image";
import DentalImage from "../../../../../public/assets/dental.png";
import Card from "@/app/(public)/Components/Card";

const DentalPage = () => {
  return (
    <div>
      <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <p className=" text-white">Sahidsmriti Samudayik Hospital</p>
          <h1 className=" text-white text-3xl font-bold">Our Dental Service</h1>
        </div>
        <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
          Dental Services
        </h1>
        <PiToothThin className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
      </div>
      <div className="bg-rose-600 flex flex-col  text-white md:flex-row">
        <section className="md:w-[700px]">
          <Image src={DentalImage} alt="dental Image" />
        </section>
        <section className="px-10 py-5">
          <p className="text-[30px]">🦷 Your Smile, Our Passion: Welcome to Our Dental Practice! 🦷</p>
          <br />
          <span className="md:text-justify">
            At our dental practice, we believe in the power of a healthy and
            confident smile. Our team of skilled and caring dentists,
            hygienists, and staff are dedicated to providing you with
            exceptional dental care in a warm and inviting environment.
          </span>
        </section>
      </div>
      <h1 className="text-4xl text-center p-10">Our Dental Staff</h1>
      <div className="flex justify-center flex-wrap">
        {Dental &&
          Dental.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DentalPage;
