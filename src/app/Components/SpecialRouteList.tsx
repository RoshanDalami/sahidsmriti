"use client";


import { SpecialistServicePath } from "../../../public/Data/specialServices";
import RoundedCard from "./RoundedCard";

export default function SpecialRouteList() {
    return(
        <div className="p-8 flex flex-col md:flex-row flex-wrap justify-center">
        {SpecialistServicePath &&
          SpecialistServicePath.map((item) => {
            return (
              <RoundedCard
                key={item.id}
                title={item.title}
                icon={item.image}
                path={item.path}
              />
            );
          })}
      </div>
    )
}