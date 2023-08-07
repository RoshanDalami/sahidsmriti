"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { nanoid } from "nanoid";


export default function CarouselGallery(props:any) {
  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="w-full">
        <h1 className="text-center text-4xl my-4">{props.title}</h1>
        <Slider {...config}>
          {props.data.map((image:ImageOrientation) => {
            return (
              <div className="shadow  transition-all px-3 " key={nanoid()}>
                <Image
                  src={image}
                  alt=""
                  className=" object-cover h-96 mx-10 rounded "
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
