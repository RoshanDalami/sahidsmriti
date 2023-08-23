"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function NewsDetailPage() {
  const [data, setData] = useState({
    fileurl: "",
    title: "",
    description: "",
  });
  const [loading,setLoading] = useState(false)
  const { id } = useParams();
  const router = useRouter();

  const getData = async () => {
    try {
        setLoading(true)
      const response = await axios.get(`../api/upload/${id}`);
      const data = await response.data;
      setData(data);
      setLoading(false)
    } catch (err) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getData();
  }, [data]);

  const onDelete = async()=>{
    try {
      const response = await axios.delete(`../api/upload/${id}`)
      redirect('/news')
    } catch (error:any) {
      console.log('Error')
    }
  }

  return (
    <React.Fragment>


      <h1 className="font-bold text-3xl text-black text-center m-5">News & Events</h1>

      <div className="flex items-center flex-col justify-center ">
        {
           data ?
        <div className=" bg-slate-300 p-3 rounded shadow-2xl">
          <Image
            src={data.fileurl}
            alt=""
            width={600}
            height={600}
            className="w-auto h-auto"
          />
          <div className="flex justify-between items-center">

          <div>
            <h1 className="text-black mx-2 my-1 font-bold text-lg">
              {data.title}
            </h1>
            <p className="text-black mx-2 my-1">{data.description}</p>
          </div>
          <div>
            <button className="text-red-600 border-2 border-red-600 py-1 px-2 hover:bg-red-600 hover:text-white rounded" onClick={onDelete}> Delete</button>
          </div>
          </div>
        </div> : <p className="text-black"> No Data</p>
        }
        <Link href={'/news'} >
       <button className="bg-blue-600 px-4 py-2 text-white m-4 ">Go Back</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
