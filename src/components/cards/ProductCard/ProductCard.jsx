import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {

    const { _id, img, title, price } = product;
    return (
        <div className="w-full border p-5 rounded-lg">
            <div className="w-full mb-8">
                <Image src={img} width={450} height={300} className="rounded-lg w-full h-52" alt={title} />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-3.5">{title}</h2>
                <div className="flex justify-between">
                    <span className="text-[#FF3811] font-semibold">Price : ${price}</span>
                    <Link href={`/services/${_id}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="cursor-pointer" width="24px" fill="#FF3811"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;