import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;

    try {
        const db = await dbConnect();
        const servicesCollection = await db.collection('services');
        const query = { _id: new ObjectId(id) };
        const result = await servicesCollection.findOne(query);
        return NextResponse.json(result);

    } catch (error) {
        return NextResponse.json({ message: "faild to fetch", status: 500 })
    }
}