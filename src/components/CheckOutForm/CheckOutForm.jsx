"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const CheckOutForm = ({ service }) => {

    const session = useSession();


    const handleConfirmOrder = (e) => {
        e.preventDefault();

    }


    return (
        <form
            onSubmit={handleConfirmOrder}
            className="space-y-6">
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    defaultValue={session?.data?.user?.name}
                    className="w-full px-4 text-sm py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    defaultValue={session?.data?.user?.email}
                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex gap-4">
                <input
                    type="date"
                    name="date"
                    defaultValue={new Date().toISOString().split('T')[0]} // Correctly formatted date
                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Service Price $"
                    name="price"
                    defaultValue={service?.price}
                    className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <textarea
                placeholder="Your Message"
                name="message"
                className="w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="10"
            ></textarea>
            <button
                type="submit"
                className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
                Order Confirm
            </button>
        </form>
    );
};

export default CheckOutForm;