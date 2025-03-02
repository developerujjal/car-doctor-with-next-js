'use client'
import OrderTableRow from '@/components/TableRow/OrderTableRow';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const MyBookingPage = () => {

    const session = useSession();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/bookings/${session?.data?.user?.email}`)
            .then(res => res.json())
            .then(data => setServices(data?.result))
    }, [session?.data?.user?.email])

    // console.log(session?.data?.user?.email)

    console.log(services)

    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div className="overflow-x-auto font-inter">
                    <table className="min-w-full bg-white">
                        <thead className="whitespace-nowrap">
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Services
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Deadline
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Amount
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-black">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="whitespace-nowrap">
                            {
                                services?.map(order => <OrderTableRow
                                    key={order._id}
                                    service={order}
                                />)
                            }
                        </tbody>
                    </table>

                    <div className="md:flex m-4">
                        <p className="text-sm text-gray-500 flex-1">Showind 1 to 5 of 100 entries</p>
                        <div className="flex items-center max-md:mt-4">
                            <p className="text-sm text-gray-500">Display</p>

                            <select className="text-sm text-gray-500 border border-gray-400 rounded px-1 py-2 mx-4 outline-none">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                                <option>100</option>
                            </select>

                            <div className="border flex rounded divide-x-2 border-gray-400 divide-gray-400">
                                <button type="button" className="px-4 py-2 hover:bg-blue-50 text-sm">Previous</button>
                                <button type="button" className="px-4 py-2 hover:bg-blue-50 text-sm">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBookingPage;