import React from 'react'
import {PiToothThin } from "react-icons/pi";
import { Dental } from '../../../../public/Data/Dental';
import Card from '@/app/Components/Card'

const DentalPage = () => {
  return (

    <div>
      <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Dental Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                Dental Services
            </h1>
            <PiToothThin className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>
        <div className='flex justify-center flex-wrap' >
          {
            Dental && Dental.map((item)=>{
              return (
                <Card key={item.id} title={item.title} description={item.description} image={item.image} />
              )
            })
          }
        </div>

    </div>
  )
}


export default DentalPage