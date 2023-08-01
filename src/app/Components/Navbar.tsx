"use client";
import Link from "next/link";
import logo from "../../../public/assets/logo.jpeg";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {motion} from 'framer-motion';
import { nanoid } from "nanoid";

export default function NavBar() {
    const [hamBurger,setHamBurger] = useState(false);
    const[open,setOpen] = useState(false);
    

  return (
    <>
    <div className=" flex w-full h-[70px] bg-white  items-center sm:h-[80px] md:h-[100px]  justify-between " onMouseLeave={()=>{setOpen(prevState => !prevState)}} >
      <nav className="flex items-center  ">
        <div className="flex items-center justify-between ">
          <Link href={"/"} className="text-2xl">
            <Image
              src={logo}
              alt=""
              className="rounded-[60%] w-[60px] h-[60px] ml-14 sm:h-[70px] sm:w-[70px] md:w-[80px] md:h-[80px] md:ml-[20px] lg:ml-[50px]"
            />
          </Link>
         <Link href={'/'}>
         <h1 className="text-red-500 ml-10 font-bold  text-xl sm:text-3xl  md:text-lg md:font-bold md:ml-4 lg:ml-5 ">
            Sahid Smriti Hospital
          </h1>
         </Link> 
        </div>
        <ul className=" hidden font-bold text-black md:flex  md:justify-end  md:ml-[150px]   ">
        {[
            ['About','/about'],
            ['Services','/services'],
            ['Sepcialist Services','/specialist'],
            ['Doctor','/doctor'],
            ['Staff','/staff'],
            ['Administrator','/administrator'],
            ['Gallery','/gallery'],
        ].map(([title,url])=>(
            <Link href={url} key={nanoid()} className={` px-2  hover:text-rose-600 sm:font-normal sm:font-xs md:px-4  md:font-bold md:py-3 lg:px4 lg:py-3`} > 
            <li>
            {title}
            </li>

            </Link>
        ))}
        </ul>
       
        <div className=" ml-16  md:hidden flex group " onClick={()=>{setHamBurger(prevState=>!prevState)}}>
            <p className="text-3xl cursor-pointer">{hamBurger?<ImCross className="text-xl" />:<GiHamburgerMenu/>}</p>
        </div>
      </nav>
    </div >
      <div className="md:hidden relative">
      {hamBurger &&  <motion.div className="flex flex-col text-black  bg-slate-200 py-4 px-4  h-80"
      initial={{scaleY:0 , originY:0}}
      animate={{scaleY:1}}
      transition={{duration:.3 , ease:'easeInOut'}}
      >
        {[
            ['About','/about'],
            ['Services','/services'],
            ['Sepcialist Services','/specialist'],
            ['Doctor','/doctor'],
            ['Staff','/staff'],
            ['Administrator','/administrator'],
            ['Gallery','/gallery'],
        ].map(([title,url])=>(
            <Link href={url} key={nanoid()}> 
            <li className="py-2 px-4 hover:text-white hover:bg-rose-600  hover:rounded-lg  list-none  " onClick={()=>{setHamBurger(false)}}>

            {title}
            </li>

            </Link>
        ))}
        </motion.div>}
      </div>
      
      
    </>
  );
}
