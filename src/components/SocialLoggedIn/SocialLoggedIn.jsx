'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLoggedIn = () => {
    const session = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('redirect');

    // useEffect(() => {
    //     if (session.status === 'authenticated') {
    //         router.push('/')
    //     }
    // }, [router, session?.status])


    const handleSocialLoggedIn = async (provider) => {
        await signIn(provider, { redirect: false});
    }



    return (
        <div className="flex gap-x-2 justify-center">
            <button className="p-4 rounded-full bg-[#F5F5F8]"><FaFacebookF color="#3B5998" size={16} /></button>
            <button className="p-4 rounded-full bg-[#F5F5F8]"><FaLinkedinIn color="#0A66C2" size={16} /></button>
            <button onClick={() => handleSocialLoggedIn("google")} className="p-4 rounded-full bg-[#F5F5F8]"><FcGoogle size={16} /></button>
        </div>
    );
};

export default SocialLoggedIn;