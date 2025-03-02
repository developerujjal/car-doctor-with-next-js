import { dbConnect } from "@/lib/dbConnect";

export async function POST(request) {
    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const body = await request.json();
        const result = await bookingsCollection.insertOne(body);
        return Response.json({ result })

    } catch (error) {
        return Response.json({ message: "Faild to fetch", status: 500 })
    }

}