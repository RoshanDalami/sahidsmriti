"use client";
import CarouselComponent from "./Components/Carousel";

import Link from "next/link";
import { MiddleData } from "../../public/Data/middleData";
import HomeMid from "./Components/homeComponent";
import BookingForm from "./booking/page";

import { useState } from "react";

import axios from 'axios';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between ">
        <div className="  h-[350px] md:h-auto block z-0">
          <CarouselComponent />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[70px] md:mt-[500px] md:flex-row ">
        {MiddleData &&
          MiddleData.map((item) => {
            return (
              <Link href={`${item.path}`} key={item.id}>
                <div className="bg-rose-600 hover:bg-rose-500 flex justify-between m-2 w-[400px]  rounded  md:p-5   ">
                  <div className=" group  overflow-hidden flex py-4 px-4   items-center  ">
                    <section>
                      {
                        <item.image className="text-5xl  text-white font-normal group-hover:text-white transition-all ease-in-out " />
                      }
                    </section>
                    <section className="flex items-center  ml-10 md:ml-4 ">
                      <h1 className="text-center  text-xl font-medium text-white">
                        {item.title}
                      </h1>
                    </section>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div >
          <HomeMid />
      </div>
      <div id="booking">
     <BookingForm />
      </div>
      
    </>
  );
}
