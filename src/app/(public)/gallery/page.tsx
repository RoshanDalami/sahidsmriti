'use client';

import CarouselGallery from "@/app/(public)/Components/GalleryCarousel";
import image01 from "../../../../public/assets/Dental01.jpeg";
import image02 from "../../../../public/assets/dental.jpeg";
import otImage1 from "../../../../public/assets/operation01.jpeg";
import otImage2 from "../../../../public/assets/operation02.jpeg";
import otImage3 from "../../../../public/assets/operation03.jpeg";
import general05 from "../../../../public/assets/hospital.jpeg";
import general03 from "../../../../public/assets/slider01.jpeg";
import general01 from "../../../../public/assets/general01.jpeg";
import general02 from "../../../../public/assets/general02.jpeg";
import general04 from "../../../../public/assets/group01.jpeg";
import physio1 from '../../../../public/assets/physio01.jpeg'
import physio2 from '../../../../public/assets/physio02.jpeg'
import eme01 from '../../../../public/assets/emeg01.jpeg'
import eme02 from '../../../../public/assets/emeg02.jpeg'
import pharma01 from '../../../../public/assets/pharamct01.jpeg'
import pharma02 from '../../../../public/assets/pharamcy02.jpeg'
import Birth01 from '../../../../public/assets/birthing01.jpeg'
import Birth02 from '../../../../public/assets/birthing02.jpeg'
import Birth03 from '../../../../public/assets/birthing03.jpeg'




const DentalArray = [image01,image02,image01,image02,image01,image02];
const OTArray = [otImage1,otImage2,otImage3,otImage1]
const General = [general05,general03,general01,general02,general04]
const PhyAndEme = [physio1,physio2,eme01,eme02]
const BirthAndPharma = [pharma01,pharma02,Birth01,Birth02,Birth03]


export default function GalleryPage(){


    return(
        <div className='min-h-screen w-screen flex flex-col justify-center items-center  bg-gradient-to-t from-blue-300  to-sky-600'>
            
                <div className="container mx-auto">
                <CarouselGallery title={'General Gallery'} data={General}/>
                </div>
                <div className="container mx-auto">
                <CarouselGallery title={'Dental Gallery'} data={DentalArray} />
                </div>
            
                <div className="container mx-auto">
                <CarouselGallery title={'Operation Theater Gallery'} data={OTArray}/>
                </div>
                <div className="container mx-auto">
                <CarouselGallery title={'Physiotheraphy & Emergency Ward Gallery'} data={PhyAndEme}/>
                </div>
                <div className="container mx-auto">
                <CarouselGallery title={'Pharmacy & Birthing Ward Gallery'} data={BirthAndPharma}/>
                </div>

        </div>
    )
}