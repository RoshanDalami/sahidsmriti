"use client";
import CarouselComponent from "./Components/Carousel";
import Card from '@/app/Components/Card';

export default function Home() {
  return (
    <div className="flex  flex-col justify-center">
      <div className=" h-[350px]">

    <CarouselComponent  />
      </div>
    <div className="flex flex-wrap items-center justify-center ">

    </div>
    </div>
  )
}
