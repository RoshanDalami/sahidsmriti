"use client";

import {FaUserDoctor,FaBed} from 'react-icons/fa6'
import {BiHappyHeartEyes} from 'react-icons/bi'

export default function FooterPage() {
  return (
    <div>
      <div className='flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='  flex justify-center items-center'>
        <FaUserDoctor className='text-[100px] text-black opacity-70 ' />
          <section className="p-10 flex flex-col justify-center items-center rounded-lg text-black my-3 md:mx-3">
            <span className="text-3xl font-extrabold opacity-70">50+</span>
            <span className="text-xl opacity-70">Medical Team</span>
          </section>
        </div>
        <div className=' flex justify-center items-center'>
        <FaBed className='text-[100px] text-black opacity-70 ' />
          <section className="p-10 flex flex-col justify-center items-center rounded-lg text-black my-3 md:mx-3">
            <span className="text-3xl font-extrabold opacity-70">20+</span>
            <span className="text-xl opacity-70">Hospital Bed</span>
          </section>
        </div>
        <div className=' flex justify-center items-center'>
        <BiHappyHeartEyes className='text-[100px] text-black opacity-70 ' />
          <section className="p-10 flex flex-col justify-center items-center rounded-lg text-black my-3 md:mx-3">
            <span className="text-3xl font-extrabold opacity-70">50000+</span>
            <span className="text-xl opacity-70">Happy Patient</span>
          </section>
        </div>
        <div className='  flex justify-center items-center'>
       
          <section className="p-10 flex flex-col justify-center items-center rounded-lg text-white my-3 md:mx-3">
            <button className='px-8 py-2 bg-rose-600'>Book Now</button>
          </section>
        </div>
       
      </div>
      <div className=" bg-rose-600 py-3">
            <p className='text-white opacity-70 text-center'>
                &copy; Sahid Smriti Samudayik Hospital 2023 All Rights Reserved.
            </p>
      </div>
    </div>
  );
}
