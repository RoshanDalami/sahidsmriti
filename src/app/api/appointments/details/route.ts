import {connect} from '@/dbConfig/dbConfig';
import Appointments from '@/Model/appointmentModel';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';


import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request:NextRequest,{ params }:Params ){
    
    const id = request
    console.log('pathname'+id)
    try {
        const details = await Appointments.findOne({_id:id})
        console.log(details)
        return NextResponse.json(details)
    } catch (error:any) {
        console.log('fail ')
        return NextResponse.json({message:'Could get details'})
    }
}