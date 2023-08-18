'use client';
import Image from 'next/image';
import mainImage from '../../../../public/assets/main/main.png'


export default function HomeMid(){
    return(
        <div className="p-6 flex flex-col mt-5 md:flex-row justify-center items-center">
            <section>
                <Image src={mainImage} alt='home image'/>
            </section>
            <section className="px-4 mx-10 ">
          <h1 className="font-bold text-3xl py-3 ">Namaste</h1>
          <p className=" md:text-justify">
            The  Sahid Smriti Samudayik Hospital was established in 2064 BS
            driven by the Vision to provide best medical healthcare to the
            people of Chitwan and its neighboring district so that the people be
            treated well as they were compelled to travel out of even for minor
            treatment. As the overwhelming response it received from the people
            of this region, the hospital became one of the best hospital to
            provide finest healthcare in a pleasant environment by professional
            medical team.
          </p>
          <div className='flex mt-10 flex-col  justify-center md:flex-row '>
            <section className='bg-rose-600 p-10 flex flex-col justify-center items-center rounded-lg text-white my-3 md:mx-3'>
                <span className='text-3xl font-extrabold opacity-70'>50+</span>
                <span className='text-xl opacity-70'>Medical Team</span>
            </section>
            <section className='bg-rose-600 p-10 flex flex-col justify-center items-center rounded-lg text-white my-3 md:mx-3'>
                <span className='text-3xl font-extrabold opacity-70'>20+</span>
                <span className='text-xl opacity-70'>Hospital Bed</span>
            </section>
            <section className='bg-rose-600 p-10 flex flex-col justify-center items-center rounded-lg text-white my-3 md:mx-3'>
                <span className='text-3xl font-extrabold opacity-70'>5000+</span>
                <span className='text-xl opacity-70'>Happy Patients</span>
            </section>
          </div>
        </section>

        </div>
    )
}