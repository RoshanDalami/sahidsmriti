import {connect} from '@/dbConfig/dbConfig';

import Appointments from '@/Model/appointmentModel';
import App from 'next/app';
import { NextRequest,NextResponse } from 'next/server';

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const{name,email,date,number,message} = reqBody;

            const newAppointment = new Appointments({
                name,
                email,
                date,
                number,
                message
            })
            await newAppointment.save()
            return NextResponse.json(newAppointment)
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}