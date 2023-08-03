import { connect } from "@/dbConfig/dbConfig";
import Appointments from "@/Model/appointmentModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { name, date, number, email, message } = reqBody;

    const newAppointment = new Appointments({
      name,
      date,
      number,
      email,
      message,
    });
    const bookedAppointment = await newAppointment.save();
    if (bookedAppointment) {
      console.log(reqBody);
    }
    return NextResponse.json({
      message: "appointment booked ",
      bookedAppointment,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message + "message from server" },
      { status: 500 }
    );
  }
}
