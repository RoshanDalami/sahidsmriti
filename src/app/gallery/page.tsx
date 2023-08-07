'use client';

import CarouselGallery from '@/app/Components/GalleryCarousel';

export default function GalleryPage(){
    return(
        <div>
            <div className=" min-h-screen w-screen flex justify-center items-center bg-gradient-to-t from-blue-300  to-sky-600">
                <div className="container mx-auto">
                    
                <CarouselGallery/>
                </div>

            </div>
        </div>
    )
}