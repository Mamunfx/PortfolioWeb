import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PiBirdBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";
import { BsChatText } from "react-icons/bs";

const GetInTouch = () => {
    return (
        <div className="my-16 w-10/12 mx-auto">

            <div className='flex justify-center my-8 mb-24'>
            <div class="relative  text-black border-4 border-black p-5 text-4xl font-semibold mb-4 w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[20px] border-t-black border-r-[20px] border-x-transparent"></div>
                Get In Touch
              </div>

            </div>

            <div className='flex justify-between'>

                <div className='text-xl font-semibold space-y-2'>
                <div className='text-6xl text-green-600 mb-4 '>
                <IoLocationOutline />
                </div>
                
                    <h1>Address</h1>
                    <h1 className='text-gray-500'>999 Carter Street</h1>
                    <h1 className='text-gray-500'>Sailor Springs, IL 62434</h1>
                </div>

                <div className='text-xl font-semibold space-y-2'>
                <div className='text-6xl text-green-600 mb-4 '>
                <FaPhoneVolume />
                </div>
                
                    <h1>Phone</h1>
                    <h1 className='text-gray-500'>+1 618-689-9409</h1>
                    <h1 className='text-gray-500'>+1 781-254-8437</h1>
                </div>

                <div className='text-xl font-semibold space-y-2'>
                <div className='text-6xl text-green-600 mb-4 '>
                <LuMails />
                </div>
               
                    <h1>Email</h1>
                    <h1 className='text-gray-500'>hello@example.com</h1>
                    <h1 className='text-gray-500'>support@example.com</h1>
                </div>

                <div className='text-xl font-semibold space-y-2'>
                <div className='text-6xl text-green-600 mb-4 '>
                <BsChatText />
                </div>
                
                    <h1 >Facebook Chat</h1>
                    <h1 className='text-gray-500'>me.freelancer3</h1>
                </div>
            </div>

            <div className='my-16 flex '>
                <div className='flex-auto'>
                    <h1 className=' text-4xl font-bold my-8'>Lets Connect</h1>
                    <div className='flex flex-col gap-6'>

                        <div className='flex gap-6 items-center'>
                        <div className='border border-gray-300 p-3 rounded-full text-xl'>
                        <FaFacebookF />
                        </div>
                        
                        <h1 className='text-xl font-semibold'>Facebook</h1>
                        </div>

                        <div className='flex gap-6 items-center'>
                        <div className='border border-gray-300 p-3 rounded-full text-xl'>
                        <PiBirdBold />
                        </div>
                        
                        <h1 className='text-xl font-semibold'>Twitter</h1>
                        </div>

                        <div className='flex gap-6 items-center'>
                        <div className='border border-gray-300 p-3 rounded-full text-xl'>
                        <FaInstagram />
                        </div>
                        
                        <h1 className='text-xl font-semibold'>Intagram</h1>
                        </div>


                        <div className='flex gap-6 items-center'>
                        <div className='border border-gray-300 p-3 rounded-full text-xl'>
                        <FaPinterestP />
                        </div>
                        
                        <h1 className='text-xl font-semibold'>Pinterest</h1>
                        </div>

                        <div className='flex gap-6 items-center'>
                        <div className='border border-gray-300 p-3 rounded-full text-xl'>
                        <FaSkype />
                        </div>
                        
                        <h1 className='text-xl font-semibold'>Skype</h1>
                        </div>

                    </div>
                </div>
                <div className=''>
                    <h1 className=' text-4xl font-bold my-8'>Send Me a Message</h1>
                    <div>
                        <input type="text" placeholder="Name" className="w-full h-12 border-2 border-gray-400 rounded-md my-4" />
                        <input type="text" placeholder="Email" className="w-full h-12 border-2 border-gray-400 rounded-md my-4" />
                        <input type="text" placeholder="Subject" className="w-full h-12 border-2 border-gray-400 rounded-md my-4" />
                        <textarea placeholder="Message" className="w-full h-32 border-2 border-gray-400 rounded-md my-4"></textarea>
                        <div className="flex justify-end">
                        <button className="btn bg-green-600 text-white border-none rounded-sm text-lg px-12">
                  Contact Me <FaArrowRight />
                </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetInTouch;