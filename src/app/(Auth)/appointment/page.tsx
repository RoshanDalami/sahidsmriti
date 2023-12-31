"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import toast from 'react-hot-toast';
import BackEndNavPage from '../nav'

export default function AppointmentPage() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [search,setSearch] = useState('');
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
  const item = data.filter((item:any)=>{
    let searchTerm = search.toLowerCase();
    if(searchTerm !== ''){
      return item.name.toLowerCase().includes(searchTerm);
    }else{
      return data
    }
  }).map((item: any) => {
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

  return (
    <div>
      <BackEndNavPage/>
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
      <div className="flex items-center justify-center my-4 ">
        <input type="text" placeholder="search by patient name " className="border-2 border-slate-400 w-[300px] h-[40px] rounded p-4 text-xl" onChange={(e)=>{setSearch(e.target.value)}}  />
      </div>

      <div className="mx-10 my-5">
        {!loading ? (
          item
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
