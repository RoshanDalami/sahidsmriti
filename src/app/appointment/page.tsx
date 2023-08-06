"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import toast from 'react-hot-toast'

export default function AppointmentPage() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const router = useRouter();


  const getData = async () => {
    try {
        setLoading(true)
      const response = await axios.get("api/appointments/appointment");
      const data = await response.data;
        toast.success('Data fetched ')
      setData(data);
      
        
    } catch (error:any) {
        toast.error('Appointment fetching failed')
    }finally{
        setLoading(false)
    }
  };
  const onLogout = async () => {
    try {
      await axios.get("api/users/logout");
      toast.success("successfully logedout")
      router.push("/login");
    } catch (error: any) {
        toast.error('Logout Fail')
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Appointments</h1>
      <button
        onClick={getData}
        className="bg-green-600 text-white px-4 py-2 items-end"
      >
        Refresh
      </button>
      <button
        onClick={onLogout}
        className="bg-blue-600 text-white px-4 py-2 items-end"
      >
        Logout
      </button>

      <div className="mx-10 my-5">
        {!loading ? (
          data.map((item: any) => {
            return (
              <div
                key={item._id}
                className="rounded bg-slate-300 my-2 flex items-center justify-between flex-wrap "
              >
                <p className="p-3 font-bold">{item.name}</p>
                <div className="flex justify-evenly mr-10">
                  <Link href={`appointment/${item._id}`}>
                    <button className="bg-blue-600 px-4 py-2 text-white">
                      view Detail
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
            <div className="flex justify-center items-center">
                <h1 className="text-4xl">
                    Fetching Appointment ...
                    <CircularProgress/>
                </h1>
            </div>
        )}
      </div>
    </div>
  );
}
