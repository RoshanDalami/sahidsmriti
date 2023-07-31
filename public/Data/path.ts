

import { TbMassage,TbHeartRateMonitor } from "react-icons/tb";
import { GiTestTubes,GiMedicines } from "react-icons/gi";
import { MdBabyChangingStation } from "react-icons/md";
import { LiaXRaySolid,LiaAmbulanceSolid } from "react-icons/lia";
import {PiToothThin } from "react-icons/pi";





export const ServicePath = [
    {id:"01",path:'services/ambulance',title:'Abmulance Service',image:LiaAmbulanceSolid},
    {id:"02",path:'services/xray',title:'X-ray',image:LiaXRaySolid},
    {id:"03",path:'services/usg',title:'Ultrasonography',image:TbHeartRateMonitor},
    {id:"04",path:'services/physiotherapy',title:'Physiotherapy',image:TbMassage},
    {id:'05',path:'services/pharmacy',title:'Pharamcy',image:GiMedicines},
    {id:"06",path:'services/lab',title:'Lab Test',image:GiTestTubes},
    {id:"07",path:'services/birthing',title:'Birthing Center',image:MdBabyChangingStation},
    {id:"08",path:'services/dental',title:'Dental',image:PiToothThin},
]