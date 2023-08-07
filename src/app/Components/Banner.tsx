import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion'


const Banner = (props:any) => {
  return (
    <>
    <div className='flex flex-col  items-start justify-center ' >
      < motion.div className='absolute ml-20 md:ml-40 '
      initial={{y:-500}}
      animate={{y:0}}
      transition={{duration:.2}}
      >

      <h1 className=' text-4xl text-white font-bold'>
        {props.title}
      </h1>
      <Link href={'/services'} >
      <button className='btn bg-rose-600 rounded-full text-white hover:bg-rose-500 '> View Services</button>
      </Link>
      <Link href={'/services/ambulance'} >
      <button className='btn bg-rose-600 rounded-full text-white hover:bg-rose-500 '> Ambulance Services</button>
      </Link>
      </motion.div>
        <Image src={props.image} alt='' className=' h-[400px] md:h-[600px]'/>
    </div>
    </>
  )
}

export default Banner