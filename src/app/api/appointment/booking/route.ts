import {connect} from '@/dbConfig/dbConfig';
import Appointments from '@/Model/appointmentModel';


import { NextRequest,NextResponse } from 'next/server';
connect();
export async function POST(request:NextRequest){
    try {
        const reqbody = await request.json();
        const newAppointment = new Appointments({
            name:reqbody.name,
            date:reqbody.date,
            number:reqbody.number,
            email:reqbody.email,
            message:reqbody.message
        });
        await newAppointment.save();
    } catch (error:any) {
        return NextResponse.json({error:error.message});
    }
}