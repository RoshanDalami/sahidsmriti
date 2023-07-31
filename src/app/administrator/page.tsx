'use client';

import { Administrator } from "../../../public/Data/Administrator";
import Card from '@/app/Components/Card';



export default function AdministratorPage(){
 return(
   <div>

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