'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "../Components/LoginForm";
export default function Admin(){
  

return(
    <div>
        <h1>Admin</h1>
        <LoginPage/>
    </div>
)
}