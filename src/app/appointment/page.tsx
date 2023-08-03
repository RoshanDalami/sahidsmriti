"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentPage() {
  const [data, setData] = useState([]);
  const { push } = useRouter();

  const getData = async () => {
    const response = await axios.get("api/appointments/appointment");
    const data = await response.data;
    setData(data);
  };
  const deleteData = async () => {
    const response = await axios.delete("api/appointments/appointment");
  };
  const getDetails = async()=>{
    try {
        const response = await axios.get('api/appointments/details');
        console.log(response)
    } catch (error:any) {
        console.log('failed to get deails')
    }
}
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
        {data.map((item: any) => {
          return (
            <div
              key={item._id}
              className="rounded bg-slate-300 my-2 flex items-center justify-between flex-wrap "
              
            >
              <p className="p-3 font-bold">{item.name}</p>
              <div className="flex justify-evenly mr-10">
                <button
                  className="bg-red-600 px-4 py-2 text-white"
                  onClick={deleteData}
                >
                  Delete
                </button>
                <Link href={`appointment/${item._id}`} onClick={getDetails}  >
                  <button  className="bg-blue-600 px-4 py-2 text-white">
                    view Detail
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
