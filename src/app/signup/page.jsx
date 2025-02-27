import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';


const SignUpPage = () => {
    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div className="flex flex-col md:justify-between md:flex-row items-center py-6 md:py-10">
                    <div className="w-full hidden md:block">
                        <Image src="https://i.ibb.co.com/hKt1LPY/Frame.png" width={500} height={400} alt="logo" />
                    </div>
                    <div className="w-full bg-white border rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:px-10 text-[#444444] border rounded-lg border-[#A2A2A2] font-inter">
                            <h1 className="text-xl py-8 text-center font-bold leading-tight tracking-tight text-[#444444] md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form
                                // onSubmit={handleSignUp}
                                className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-[#444444]">Name</label>
                                    <input type="text" name="name" id="name" className="border border-gray-300 text-[#444444] rounded-lg focus:border-[#A2A2A2] block w-full p-2.5" placeholder="Enter your name" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm md:text-base font-medium text-[#444444]">Your email</label>
                                    <input type="email" name="email" id="email" className="border border-gray-300 text-[#444444] rounded-lg focus:border-[#A2A2A2] block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm md:text-base font-medium text-[#444444]">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-[#444444] rounded-lg focus:border-[#A2A2A2] block w-full p-2.5" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-[#444444]">Accepts Our <Link href={'#'} className="font-medium hover:underline text-[#FF3811] pointer-cursor">Terms & Condition</Link> </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-[#FF3811] hover:bg-[#ab2106] focus:ring-4 focus:outline-none focus:ring-[#ab2106] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                                <span className="text-[444444] font-medium text-center text-sm mt-3 inline-block w-full">Or Sign In with</span>
                                <div className="flex gap-x-2 justify-center">
                                    <button className="p-4 rounded-full bg-[#F5F5F8]"><FaFacebookF color="#3B5998" size={16} /></button>
                                    <button className="p-4 rounded-full bg-[#F5F5F8]"><FaLinkedinIn color="#0A66C2" size={16} /></button>
                                    <button className="p-4 rounded-full bg-[#F5F5F8]"><FcGoogle size={16} /></button>
                                </div>
                                <p className="text-sm font-light text-center">
                                    <span className="text-[#737373]">Already have an account?</span> <Link href={'/signin'} className="font-medium hover:underline text-[#FF3811]">Sign in</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;