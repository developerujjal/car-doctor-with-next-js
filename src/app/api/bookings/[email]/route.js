import { dbConnect } from '@/lib/dbConnect';
import React from 'react';

export const GET = async (request, { params }) => {
    const { email } = await params;
    console.log(email)

    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const query = { email: email };
        const result = await bookingsCollection.find(query).toArray();
        return Response.json({ result })

    } catch (error) {
        return Response.json({ message: "Faild to fatch", status: 500 })
    }
};