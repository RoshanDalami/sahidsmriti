'use client';

import CarouselGallery from '@/app/Components/GalleryCarousel';
import image01 from "../../../public/assets/Dental01.jpeg";
import image02 from "../../../public/assets/dental.jpeg";
import otImage1 from "../../../public/assets/operation01.jpeg";
import otImage2 from "../../../public/assets/operation02.jpeg";
import otImage3 from "../../../public/assets/operation03.jpeg";


const DentalArray = [image01,image02,image01,image02,image01,image02];
const OTArray = [otImage1,otImage2,otImage3,otImage1]

export default function GalleryPage(){


    return(
        <div className='min-h-screen w-screen flex flex-col justify-center items-center  bg-gradient-to-t from-blue-300  to-sky-600'>
            
                <div className="container mx-auto">
                <CarouselGallery title={'Dental Gallery'} data={DentalArray} />
                </div>
            
                <div className="container mx-auto">
                <CarouselGallery title={'Operation Theater Gallery'} data={OTArray}/>
                </div>

        </div>
    )
}