'use client';

import { Administrator } from "../../../../public/Data/Administrator";
import Card from '@/app/(public)/Components/Card';



export default function AdministratorPage(){
 return(
   <div className="bg-gradient-to-t from-blue-300  to-sky-600 ">
    <h1 className="text-4xl text-center pt-4 text-white">Administrator</h1>
    <div className="flex flex-wrap justify-center ">
        {
            Administrator && Administrator.map((item)=>{
                return <Card key={item.id} title={item.title} image={item.image} description={item.degniation}  />
            })
        }
    </div>

   </div>
 )
}