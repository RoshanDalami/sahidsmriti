"use client";
import Image from "next/image";
import SpecialRouteList from "@/app/Components/SpecialRouteList";
import orthoImage from "../../../../public/assets/ortho/ortho.png";

export default function OrthoPage() {
  return (
    <div>
      <SpecialRouteList />
      <div>

      <div className="bg-rose-600 p-10">
        <Image src={orthoImage} alt="" />
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
      </div>
    </div>
  );
}
