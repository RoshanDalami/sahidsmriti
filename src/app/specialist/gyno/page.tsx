'use client';
import SpecialRouteList from "@/app/Components/SpecialRouteList";
import Image from "next/image";
import gynoImage from '../../../../public/assets/gyno/gyno.png'
export default function GynoPage(){
    return(
        <div>
            <SpecialRouteList/>
            <div>
                <div className="bg-rose-600 p-10">
                    <Image src={gynoImage} alt=""/>
                </div>
            </div>
            <h1>Gyno</h1>
        </div>
    )
}