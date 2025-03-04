import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const { id } =await params;
    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection("bookings");
        const query = { _id: new ObjectId(id) };
        const result = await bookingsCollection.findOne(query);
        return NextResponse.json({ result })

    } catch (error) {
        return NextResponse.json({ mesage: "faild", status: 500 })
    }
}