import {connect} from '@/dbConfig/dbConfig';
import Appointments from '@/Model/appointmentModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request:NextRequest,{params}:{params:{id:string}} ){
    console.log(params.id + 'suppose to be id')
    try {
        const id =  params.id;
        const data = await Appointments.findOne({_id:id});
        console.log(data);
        return NextResponse.json(data);
    } catch (error:any) {
        console.log('error from server')
        return NextResponse.json({error:error.message},{status:500})
    }

}