"use client";

import { MdPhoneInTalk } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { ImLocation } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <p className=" text-white">Sahidsmriti Samudayik Hospital</p>
          <h1 className=" text-white text-3xl font-bold">Contact Us</h1>
        </div>
        <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
          Let&apos;s Talk
        </h1>
        <MdPhoneInTalk className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
      </div>
      <div>
        <section className="py-7 px-5">
          <p className="py-4">
            Your question and comments are important to us. We&apos;ve got
            everything covered for your needs.
          </p>
          <hr />
          <h1 className="text-2xl font-bold py-3">Contact Information</h1>
          <div className="flex items-center ">
            <section className=" bg-rose-600 rounded-full p-2">

            <MdPhoneInTalk className="text-3xl text-white" />
            </section>
            <section className="ml-5 text-medium font-bold">
                <p>Phone</p>
                <p>
                    078-411055 , 078-590355
                </p>
            </section>
          </div>
          <div className="flex items-center py-3 ">
            <section className=" bg-rose-600 rounded-full p-2">

            <a href="mailto:hospital.sahidsmriti@gmail.com">
                <LuMail className="text-3xl text-white"/>
              </a>
            </section>
            <section className="ml-5 text-medium font-bold">
                <p>Email</p>
                <a href="mailto:hospital.sahidsmriti@gmail.com">

                <p>
                    hospital.sahidsmriti@gmail.com
                </p>
                </a>
            </section>
          </div>
          <div className="flex items-center py-3 ">
            <section className=" bg-rose-600 rounded-full p-2">

            <Link href={"https://www.facebook.com/sssaspatal?mibextid=9R9pXO"} target="__blank">
                <FaFacebookSquare className="text-3xl text-white" />
              </Link>
            </section>
            <section className="ml-5 text-medium font-bold">
                <p>Facebook</p>
                <Link href={"https://www.facebook.com/sssaspatal?mibextid=9R9pXO"} target="__blank">
                <p>
                Sahid Smiriti Community Hospital
                </p>
                </Link>
            </section>
          </div>
          <hr />
          <div className="flex items-center py-3 ">
            <section className=" bg-rose-600 rounded-full p-2">

            <ImLocation className="text-3xl text-white" />
            </section>
            <section className="ml-5 text-medium font-bold">
                <p>Location</p>
                <p>
                    Bardaghat-14 , Nawalparasi(west), Chaupatta
                </p>
            </section>
          </div>
        </section>
        <section>

        </section>
      </div>
      <div className=" flex justify-center py-5 ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.958473645258!2d83.78462429436806!3d27.501666893110425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39943c9f76a12b05%3A0x7cb6f4374cce594e!2sSahid%20Smriti%20Samudayik%20Hospital!5e0!3m2!1sen!2snp!4v1690896110860!5m2!1sen!2snp" width="900" height="450"  loading="lazy" />
      </div>
    </div>
  );
}
