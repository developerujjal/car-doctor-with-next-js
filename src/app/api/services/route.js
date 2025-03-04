import { dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await dbConnect();
        const servicesCollection = await db.collection("services");
        const result = await servicesCollection.find().toArray();
        return NextResponse.json({result})
    } catch (error) {
        return NextResponse.json({ message: "Services faild to fetch", status: 500 })
    }
}