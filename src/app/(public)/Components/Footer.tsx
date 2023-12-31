"use client";
import Link from 'next/link';
import {FaUserDoctor,FaBed} from 'react-icons/fa6'
import {BiHappyHeartEyes,BiSolidPhoneCall} from 'react-icons/bi'
import {MdOutlineEmail} from 'react-icons/md'
import { useRouter } from 'next/navigation';

export default function FooterPage() {
  const router = useRouter();
  const redirect = ()=>{
    router.push('/#booking')
  }
  return (
    <div>
      <div className='flex flex-col flex-wrap md:flex-row justify-between mt-10'>
        <div className='  flex justify-center items-center'>
        <FaUserDoctor className='text-[100px] text-black opacity-70 ' />
          <section className="p-10 flex flex-col justify-center items-center rounded-lg text-black my-3 md:mx-3">
            <span className="text-3xl font-extrabold opacity-70">40+</span>
            <span className="text-xl opacity-70">Medical Team</span>
          </section>
        </div>
        <div className=' flex justify-center items-center'>
        <FaBed className='text-[100px] text-black opacity-70 ' />
          <section className="p-10 flex flex-col justify-center items-center rounded-lg text-black my-3 md:mx-3">
            <span className="text-3xl font-extrabold opacity-70">25+</span>
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
            
            
            <button className='px-8 py-2 bg-rose-600'
            onClick={redirect}
            >Book Now</button>

            
          </section>
        </div>
       
      </div>
      
      <div className=" bg-rose-600 py-3 ">
      <div className=' flex flex-col md:flex-row p-4 items-center justify-center text-white opacity-70' >
        <div className='flex justify-center items-center mx-5'>
          <MdOutlineEmail className='text-2xl' />
          
          <h1 className='text-xl ml-5'>hospital.sahidsmriti@gmail.com</h1>
        </div>
        <div className='flex justify-center items-center'>
          <BiSolidPhoneCall className='text-2xl md:text-3xl' />
          <h1 className='text-xl md:text-2xl ml-3'>
          078-411055 , 078-590355
          </h1>
        </div>

      </div>
            <p className='text-white opacity-70 text-center'>
                &copy; Sahid Smriti Samudayik Hospital 2023 All Rights Reserved.
            </p>
      </div>
    </div>
  );
}
