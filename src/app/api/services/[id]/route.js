import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    const { id } = await params;

    try {
        const db = await dbConnect();
        const servicesCollection = await db.collection('services');
        const query = { _id: new ObjectId(id) };
        const result = await servicesCollection.findOne(query);
        return Response.json(result);

    } catch (error) {
        return Response.json({ message: "faild to fetch", status: 500 })
    }
}