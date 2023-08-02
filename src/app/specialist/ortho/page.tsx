"use client";
import Image from "next/image";
import SpecialRouteList from "@/app/Components/SpecialRouteList";
import orthoImage from "../../../../public/assets/ortho/ortho.png";

export default function OrthoPage() {
  return (
    <div>
      <SpecialRouteList />
      <div className="bg-rose-600 p-10 flex flex-col md:flex-row">

      <div >
        <Image src={orthoImage} alt="" />
      </div>

      <div className="text-white flex flex-col justify-center mt-4 md:p-5">
        <h1 className="text-3xl">Timing : </h1>
        <p className="text-3xl  py-4 text-center "> Introducing Our Orthopedic Services: Expert Care for a Healthy, Active Life!</p>
        <p className=" text-justify p-10">
        Our team of highly skilled and board-certified Orthologists, specialized in orthopedic care, are here to diagnose, treat, and guide you through your journey to a pain-free and active life. With years of experience and cutting-edge knowledge, our experts stay at the forefront of the latest advancements in orthopedic medicine
        </p>

      </div>
      </div>
    </div>
  );
}
