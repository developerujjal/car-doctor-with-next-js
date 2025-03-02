import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {

    try {
        const { id } = await params;
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const query = { _id: new ObjectId(id) };
        const result = await bookingsCollection.deleteOne(query);
        return Response.json(result)

    } catch (error) {
        return Response.json({ message: "Faild to fetch", status: 500 })
    }
}