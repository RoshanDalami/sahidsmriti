'use client';
import Link from "next/link";
import {NavLink} from '../(public)/Components/NavLink'
export default function BackEndNavPage(){
    return(
        <div className="bg-white  mt-4" >
            <nav className="flex flex-col items-center justify-center md:flex-row">
                
                

                <NavLink href={'/appointment'}>
                    <p className="text-xl px-2 md:border-r-2 border-r-gray-500 py-3 " >Appointments</p>
                </NavLink>
                <NavLink href={'/news'}>
                    <p className="text-xl text-center px-2  py-3 ">News & Events</p>
                </NavLink>
                
                
            </nav>
        </div>
    )
}