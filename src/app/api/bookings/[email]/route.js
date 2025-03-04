import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import React from 'react';

export const GET = async (request, { params }) => {
    const { email } = await params;
    console.log(email)

    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const query = { email: email };
        const result = await bookingsCollection.find(query).toArray();
        return NextResponse.json({ result })

    } catch (error) {
        return NextResponse.json({ message: "Faild to fatch", status: 500 })
    }
};


export const PATCH = async (request, { params }) => {
    const { email } = await params;

    try {
        const body = await request.json();
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const filter = { _id: new ObjectId(email) };
        const updateDoc = {
            $set: {
                ...body
            }
        }

        const result = await bookingsCollection.updateOne(filter, updateDoc);
        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json({ message: "Faild to Update", status: 500 })
    }
}



export const DELETE = async (request, { params }) => {
    const { email } = await params;

    try {
        const db = await dbConnect();
        const bookingsCollection = await db.collection('bookings');
        const query = { _id: new ObjectId(email) };
        const result = await bookingsCollection.deleteOne(query);
        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json({ message: "Faild to Delete items", status: 500 })
    }
}