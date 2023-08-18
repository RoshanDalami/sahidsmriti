'use client';
import Card from '../Components/Card';
import {Clinical }from '../../../../public/Data/clinical';
import {Lab} from '../../../../public/Data/Lab';
import {Radiographer} from  '../../../../public/Data/Radiographer';
import {PharmacyData} from  '../../../../public/Data/pharmacy';
import ActionAreaCardStaff from '../Components/StaffCard';

export default function StaffPage(){
    return(
        <div className='bg-gradient-to-t from-blue-300  to-sky-600 '>
            {/* clinical */}
           <div className=''>
            <h1 className='text-center text-4xl pt-4 text-white'>Clinical Staff</h1>
            <div className='flex items-center justify-center flex-wrap'>
                {
                    Clinical.map((item:any)=>{
                        return(
                            <ActionAreaCardStaff key={item.id} title={item.title}  description={item.degnation} />
                        )
                    })
                }

            </div>
           </div>
           {/* Laboratory */}
           <div className='m-4'>
            <h1 className='text-center text-4xl text-white'> Laboratory Staff </h1>
            <div className='flex items-center justify-center flex-wrap '>
            {
                    Lab.map((item:any)=>{
                        return(
                            <ActionAreaCardStaff key={item.id} title={item.title} image={item.image} description={item.degnation} />
                        )
                    })
                }
            </div>
           </div>
           {/* Pharamacy  */}
           <div className='m-4'>
            <h1 className='text-center text-4xl text-white'>Pharamcy Staff</h1>
            <div className='flex items-center justify-center flex-wrap'>
            {
                    PharmacyData.map((item:any)=>{
                        return(
                            <ActionAreaCardStaff key={item.id} title={item.title} image={item.image} description={item.description} />
                        )
                    })
                }
            </div>
           </div>
           <div className='m-4'>
            <h1 className='text-center text-4xl text-white'>Radiography Staff</h1>
            <div className='flex items-center justify-center flex-wrap mb-20'>
            {
                    Radiographer.map((item:any)=>{
                        return(
                            <ActionAreaCardStaff key={item.id} title={item.title} image={item.image} description={item.degnation} />
                        )
                    })
                }
            </div>
           </div>
        </div>
    )
}