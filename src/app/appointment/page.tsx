"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TbH1 } from "react-icons/tb";

export default function AppointmentPage() {
  const [data, setData] = useState([]);
 

  const getData = async () => {
    const response = await axios.get("api/appointments/appointment");
    const data = await response.data;
    setData(data);
  };
  const deleteData = async () => {
    const response = await axios.delete("api/appointments/appointment");
  };
  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Appointments</h1>
      <button
        onClick={getData}
        className="bg-green-600 text-white px-4 py-2 items-end"
      >
        Refresh
      </button>
      <div className="mx-10 my-5">
        {data?data.map((item: any) => {
          return (
            <div
              key={item._id}
              className="rounded bg-slate-300 my-2 flex items-center justify-between flex-wrap "
              
            >
              <p className="p-3 font-bold">{item.name}</p>
              <div className="flex justify-evenly mr-10">
                <Link href={`appointment/${item._id}`} >
                  <button  className="bg-blue-600 px-4 py-2 text-white">
                    view Detail
                  </button>
                </Link>
              </div>
            </div>
          );
        }): <h1 className="text-3xl ">Fetching data...</h1> }
      </div>
    </div>
  );
}
