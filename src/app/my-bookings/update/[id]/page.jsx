import UpdateForm from '@/components/UpdateForm/UpdateForm';
import React from 'react';

const UpdatePage = async ({ params }) => {

    const { id } = await params;
    // console.log(id)

    const response = await fetch(`http://localhost:3000/api/singel-booking/${id}`);
    const data = await response.json();


    console.log(data)

    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div>
                    <div className="min-h-screen font-inter flex items-center justify-center my-10 md:my-14">
                        <div className="w-full bg-[#F3F3F3] p-4 md:p-12 lg:p-24 rounded-lg shadow-md">
                            <UpdateForm service={data?.result} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UpdatePage;