'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "../Components/LoginForm";
export default function Admin(){
    // const [data,setData] = useState([]);

    // const getData = async ()=>{
    //     try {
    //         const response = await axios.get('api/appointment/admin')
    //         console.log(response.data)
    //         setData(await response.data)
            
    //     } catch (error:any) {
    //         console.log('error')
    //     }
    // }

return(
    <div>
        <h1>Admin</h1>
        <LoginPage/>
    </div>
)
}