'use client';

export default function LoginPage(){
    return(
        <div className="flex justify-center bg-rose-600 p-10 w-[500px] mx-auto ">

        <div className="flex flex-col " >
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button className="bg-blue-600 px-3 py-1 text-white mt-5">Login</button>
        </div>
        </div>
    )
}