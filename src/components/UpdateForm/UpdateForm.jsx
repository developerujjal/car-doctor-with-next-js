'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const UpdateForm = ({ service }) => {

    const session = useSession();
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedDoc = {
            date: e.target.date.value,
            mesage: e.target.message.value
        }

        const res = await fetch(`http://localhost:3000/api/bookings/${service?._id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedDoc)
        });
        const data = await res.json();

        if(data?.modifiedCount > 0){
            alert("Update Successfully");
            router.push('/')
        }
        console.log(data)


    }

    return (
        <form
            onSubmit={handleUpdate}
            className="space-y-6">
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    readOnly
                    defaultValue={session?.data?.user?.name}
                    className="w-full px-4 text-sm py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    readOnly
                    defaultValue={session?.data?.user?.email}
                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex gap-4">
                <input
                    type="date"
                    name="date"
                    defaultValue={new Date(service?.date).toISOString().split('T')[0]}
                    // Correctly formatted date
                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Service Price $"
                    name="price"
                    readOnly
                    defaultValue={service?.price}
                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <textarea
                placeholder="Your Message"
                name="message"
                required
                defaultValue={service?.mesage}
                className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="10"
            ></textarea>
            <button
                type="submit"
                className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
                Update Confirm
            </button>
        </form>
    );
};

export default UpdateForm;