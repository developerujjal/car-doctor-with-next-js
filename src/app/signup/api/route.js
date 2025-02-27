import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const body = await request.json();
        const db = await dbConnect();
        const dbCollection = db.collection('users');
        const query = { email: body?.email };
        const isExist = await dbCollection.findOne(query);
        if (isExist) {
            return Response.json({ message: "User already exists", }, { status: 409 });
        }

        const hashPassword = bcrypt.hashSync(body.password, 14);

        const result = await dbCollection.insertOne({ ...body, password: hashPassword });
        return Response.json({ message: "Data inserted successfully!", result }, { status: 201 });
    } catch (error) {
        return Response.json({ message: "Failed to insert data" }, { status: 500 });

    }

}