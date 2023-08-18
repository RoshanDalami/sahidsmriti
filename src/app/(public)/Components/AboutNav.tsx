'use client';
import Link from "next/link";
import {NavLink} from '../Components/NavlinkAbout'
export default function AboutNavPage(){
    return(
        <div className="bg-white  mt-4" >
            <nav className="flex flex-col items-center justify-center md:flex-row ">
                
                <NavLink href={'/about/history'}>
                    <p className="text-xl px-2 md:border-r-2 border-r-gray-500 py-3 " >Histroy</p>
                </NavLink>
                <NavLink href={'/about/president'}>
                    <p className="text-xl text-center px-2 md:border-r-2 border-r-gray-500 py-3 ">President & Vice President</p>
                </NavLink>
                <NavLink href={'/about/board'}>
                    <p className="text-xl px-2  py-3 ">Board Members</p>
                </NavLink>
            </nav>
        </div>
    )
}