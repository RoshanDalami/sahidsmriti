import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = (props: any) => {
  return (
    <>
      <div className="flex flex-col  items-start justify-center ">
        <motion.div
          className="absolute ml-20 md:ml-40 "
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className=" text-xs md:text-xl text-white">{props.sub}</h1>
          <h1 className=" text-xl md:text-3xl text-white w-[300px] md:w-auto font-bold">{props.title}</h1>
          <p className=" text-sm md:text-lg text-white w-[400px] md:w-[900px] ">{props.description}</p>
          <div className="flex flex-col md:flex-row mt-5">
            <Link href={"/services"}>
              <button className="btn bg-rose-600 rounded-full text-white hover:bg-rose-500 mb-2 ml-2 ">
                {" "}
                View Services
              </button>
            </Link>
            <Link href={"/services/ambulance"}>
              <button className="btn bg-rose-600 rounded-full text-white hover:bg-rose-500 ml-2 ">
                {" "}
                Ambulance Services
              </button>
            </Link>
          </div>
        </motion.div>
        <Image src={props.image} alt="" className=" h-[400px] md:h-[700px] " />
      </div>
    </>
  );
};

export default Banner;
