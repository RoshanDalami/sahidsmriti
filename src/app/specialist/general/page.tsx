"use client";

import SpecialRouteList from "@/app/Components/SpecialRouteList";

import Image from "next/image";
import physicianImage from '../../../../public/assets/physician/physician.png'





export default function GeneralPage() {
  return (
    <div>
      <SpecialRouteList/>
      <div>
        <div className="bg-rose-600 p-10">
          <Image src={physicianImage} alt=""/>
        </div>
      </div>
      <h1>General</h1>
    </div>
  );
}
