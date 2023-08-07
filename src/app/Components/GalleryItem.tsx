'use client';

import Image from "next/image";


export default function CarouselItem (props:any){
<div>
    <div className="shadow slide-item transition-all">
        <Image
            src={props.image}
            alt=""
            className="object-cover h-48 rounded"
        />
    </div>
</div>
}