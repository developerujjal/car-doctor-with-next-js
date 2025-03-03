import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export const GET = async (request, {params}) => {
    const { id } =await params;
    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection("bookings");
        const query = { _id: new ObjectId(id) };
        const result = await bookingsCollection.findOne(query);
        return Response.json({ result })

    } catch (error) {
        return Response.json({ mesage: "faild", status: 500 })
    }
}