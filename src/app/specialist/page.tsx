"use client";

import RoundedCard from "../Components/RoundedCard";
import { SpecialistServicePath } from "../../../public/Data/specialServices";
export default function SpecialistServicePage(){
    return(
        <div className="p-8 flex flex-col md:flex-row flex-wrap justify-center">
            {SpecialistServicePath && SpecialistServicePath.map((item)=>{
                return <RoundedCard key={item.id} title={item.title} icon={item.image} path={'specialist/'+item.path} />
            })}
           
        </div>
    )
}