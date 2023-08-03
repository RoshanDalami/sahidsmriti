import {connect} from '@/dbConfig/dbConfig';
import Appointments from '@/Model/appointmentModel';
import { NextRequest,NextResponse } from 'next/server';


connect();

export async function GET(){
    try {
        const data = await Appointments.find({},{__v:0});
        return NextResponse.json(data);
        
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}