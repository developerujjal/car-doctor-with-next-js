import { dbConnect } from "@/lib/dbConnect"

export async function GET() {
    try {
        const db = await dbConnect();
        const servicesCollection = await db.collection("services");
        const result = await servicesCollection.find().toArray();
        return Response.json({result})
    } catch (error) {
        return Response.json({ message: "Services faild to fetch", status: 500 })
    }
}