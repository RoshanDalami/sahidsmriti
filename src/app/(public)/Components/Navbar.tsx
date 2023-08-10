"use client";
import Link from "next/link";

import logo from "../../../../public/assets/logo.jpeg";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { NavLink } from "./NavLink";
import { nanoid } from "nanoid";

export default function NavBar() {
  const [hamBurger, setHamBurger] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className=" flex w-full h-[70px] bg-white  items-center sm:h-[80px] md:h-[100px]  justify-between "
        onMouseLeave={() => {
          setOpen((prevState) => !prevState);
        }}
      >
        <nav className="flex items-center justify-center  ">
          <div className="flex items-center justify-center ">
            <Link href={"/"} className="text-2xl">
              <Image
                src={logo}
                alt=""
                className="rounded-[60%] w-[60px] h-[60px] ml-14 sm:h-[70px] sm:w-[70px] md:w-[80px] md:h-[80px] md:ml-[20px] lg:ml-[50px]"
              />
            </Link>
            <Link href={"/"}>
              <h1 className="text-red-500 ml-10 font-bold  text-xl sm:text-3xl  md:text-lg md:font-bold md:ml-4 lg:ml-5 ">
                Sahid Smriti Hospital
              </h1>
            </Link>
          </div>
          <ul className=" hidden font-bold text-black md:flex  md:justify-end  md:ml-[150px]   ">
            {[
              ["About", "/about/history"],
              ["Services", "/services"],
              ["Sepcialist Services", "/specialist"],
              ["Doctors", "/doctor"],
              ["Staffs", "/staff"],
              ["Administrator", "/administrator"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
            ].map(([title, url]) => (
              <NavLink
                href={url}
                key={nanoid()}
                className={` px-2 sm:font-normal sm:font-xs md:px-4  md:font-bold md:py-3 lg:px4 lg:py-3`}
              >
                <li>{title}</li>
              </NavLink>
            ))}
          <Link href={'/login'} className="hidden md:flex">
          <button className=" bg-sky-600 py-2 px-4 text-white rounded">
              For Admin
          </button>
          </Link>
          </ul>

          <div
            className=" ml-16  md:hidden flex group "
            onClick={() => {
              setHamBurger((prevState) => !prevState);
            }}
          >
            <p className="text-3xl cursor-pointer">
              {hamBurger ? (
                <ImCross className="text-xl" />
              ) : (
                <GiHamburgerMenu />
              )}
            </p>
          </div>
        </nav>
      </div>
      <div className="md:hidden relative">
        {hamBurger && (
          <motion.div
            className="flex flex-col text-black  bg-white py-4 px-4  "
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {[
              ["About", "/about/history"],
              ["Services", "/services"],
              ["Sepcialist Services", "/specialist"],
              ["Doctors", "/doctor"],
              ["Staffs", "/staff"],
              ["Administrator", "/administrator"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
            ].map(([title, url]) => (
              <Link href={url} key={nanoid()}>
                <li
                  className="py-2 px-4 hover:text-white hover:bg-rose-600  hover:rounded-lg font-bold list-none  "
                  onClick={() => {
                    setHamBurger(false);
                  }}
                >
                  {title}
                </li>
              </Link>
            ))}
            <div className="flex text-2xl w-[70px] items-center justify-between ">
              <Link href={"/#"}>
                <FaFacebookSquare />
              </Link>
              
              <a href="mailto:hospital.sahidsmriti@gmail.com">
              <LuMail />
              </a>
              <Link href={'/login'} className="">
          <button className=" bg-sky-600 py-1 px-4 rounded text-white text-xs">
              For Admin
          </button>
          </Link>
                
             
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
