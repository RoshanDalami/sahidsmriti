import {connect} from '@/dbConfig/dbConfig';
import Appointments from '@/Model/appointmentModel';

import { NextRequest, NextResponse } from 'next/server';


connect();

export async function GET(){
    try {
        const appointment = await Appointments.find({})
        console.log(appointment)
        return NextResponse.json(appointment)
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}