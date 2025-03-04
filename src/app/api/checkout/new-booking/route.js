import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const body = await request.json();
        const result = await bookingsCollection.insertOne(body);
        return NextResponse.json({ result })

    } catch (error) {
        return NextResponse.json({ message: "Faild to fetch", status: 500 })
    }

}