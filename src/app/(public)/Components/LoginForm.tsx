"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo.jpeg";
import { useState } from "react";

export default function LoginPage() {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  
  return (
    <div className="flex flex-col items-center justify-center bg-rose-600 p-10 w-[500px] mx-auto rounded ">
      <Image
        src={logo}
        alt=""
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex flex-col ">
        <label htmlFor="">Email</label>
        <input type="email"
            placeholder="Email"
            onChange={(e)=>{setAdmin({...admin,email:e.target.value})}}
            value={admin.email}
        />
        <label htmlFor="">Password</label>
        <input type="password"
        placeholder="password"
         onChange={(e)=>{setAdmin({...admin,password:e.target.value})}}
         value={admin.password}
        />
        <button className="bg-blue-600 px-3 py-1 text-white mt-5">Login</button>
      </div>
    </div>
  );
}
