'use client'
import axios from "axios"
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Warning(){
    const router = useRouter();
    const onLogout = async ()=>{
        const response = await axios.get('api/users/logout');
        router.push('/services')
        
    }
    return (
        <div className="">
            <h1 className="text-4xl font-bold">
                Please Logout to visit site 
            </h1>
            <button onClick={onLogout} className="px-4 py-2 bg-blue-500 " >
            Logout
            </button>
        </div>
    )
}