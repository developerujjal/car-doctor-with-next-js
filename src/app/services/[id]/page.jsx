import { getSingelData } from '@/services/carServices';
import Link from 'next/link';
import React from 'react';

const Detailspage = async ({ params }) => {

    const { id } = await params;

    const service = await getSingelData(id)

    // console.log(service)

    return (
        <div className="bg-gray-100 font-sans">
            {/* Unique Car Engine Service Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">{service?.title}</h1>
                    <p className="text-gray-600 mt-4">
                        {service?.description}
                    </p>
                </div>

                {/* Instant Car Services Section */}
                <div className='grid md:grid-cols-12 gap-8 mb-8'>
                    {/* Left Side - Facility Cards */}
                    <div className="md:col-span-8">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
                            {
                                service?.facility.map((one, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                        <h2 className="text-2xl font-bold text-gray-800">{one?.name}</h2>
                                        <p className="text-gray-600 mt-4">
                                            {one?.details}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Side - 3 Simple Steps to Process Card */}
                    <div className='md:col-span-4'>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-bold text-gray-800">3 Simple Steps to Process</h2>
                            <p className="text-gray-600 mt-4">
                                There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered
                                Attention in Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even
                                Slightly Believable.
                            </p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-2xl font-bold'>Price ${service.price} </p>
                            <Link
                                href={`/services/checkout/${service?._id}`}
                                className='bg-[#FF3811] py-2 px-4 rounded-md text-white font-bold'>Proceed Checkout</Link>
                        </div>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="text-center">
                    <p className="text-gray-600">
                        It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures.
                    </p>
                    <p className="text-gray-600 mt-4">
                        There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered
                        Attention in Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even
                        Slightly Believable. If You Are Going To Use A Passage Of Lorem Ipsum, You Need To Be Sure There
                        Isn't Anything Embarrassing Hidden in The Middle Of Text.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Detailspage;