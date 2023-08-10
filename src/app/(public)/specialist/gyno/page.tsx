"use client";
import SpecialRouteList from "@/app/(public)/Components/SpecialRouteList";
import Image from "next/image";
import gynoImage from "../../../../../public/assets/gyno/gyno.png";
export default function GynoPage() {
  return (
    <div>
      <SpecialRouteList />
      <div className="bg-rose-600 p-10 flex flex-col md:flex-row">
        <div >
          <Image src={gynoImage} alt="" />
        </div>

        <div className="text-white flex flex-col justify-center mt-4 md:p-5">
          <h1 className="text-3xl">Timing : </h1>
          <p className="text-3xl  py-4 text-center ">
            {" Embracing Women's Health: Expert Gynecology Care "}
           
          </p>
          <p className=" md:text-justify p-10">
          Welcome to our gynecology practice, a sanctuary of compassionate and specialized care dedicated to women&apos;s health and well-being. Our team of experienced gynecologists is committed to providing comprehensive and personalized services that empower women to lead healthy, fulfilling lives.


          </p>
        </div>
      </div>
    </div>
  );
}
