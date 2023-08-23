"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Event() {
  const [data, setData] = useState({
    fileurl: "",
    title: "",
    description: "",
  });
  const [loading,setLoading] = useState(false)
  const { id } = useParams();
  

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
        <div className="bg-white p-3 rounded shadow-2xl">
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
         
          </div>
        </div> : <p className="text-black"> No Data</p>
        }
       
      </div>
    </React.Fragment>
  );
}
