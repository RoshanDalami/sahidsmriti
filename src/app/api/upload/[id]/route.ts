
import { connect } from "@/dbConfig/dbConfig";
import Images from "@/Model/model";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    try {
        const id = params.id ;
        const data = await Images.findOne({_id:id});
        return NextResponse.json(data)
    } catch (error:any) {
        console.log('error from server')
        return NextResponse.json({error:error.message},{status:500})
    }
}

export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){
 try {
    const id = params.id ;
    const data = await Images.findOneAndDelete({_id:id});
 } catch (error:any) {
    return NextResponse.json({error : error.message})
 }
}