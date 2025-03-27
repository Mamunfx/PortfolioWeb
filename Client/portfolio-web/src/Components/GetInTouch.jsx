import React from 'react';

const GetInTouch = () => {
    return (
        <div className="my-16 w-10/12 mx-auto">
            <div>
                <h1 className="text-center text-4xl font-bold my-20 mt-28">Get In ouch</h1>
            </div>

            <div className='flex justify-between'>

                <div className='text-xl space-y-4'>
                    <h1>Address</h1>
                    <h1 className='text-gray-500'>999 Carter Street</h1>
                    <h1 className='text-gray-500'>Sailor Springs, IL 62434</h1>
                </div>

                <div className='text-xl space-y-4'>
                    <h1>Phone</h1>
                    <h1 className='text-gray-500'>+1 618-689-9409</h1>
                    <h1 className='text-gray-500'>+1 781-254-8437</h1>
                </div>

                <div className='text-xl space-y-4'>
                    <h1>Email</h1>
                    <h1 className='text-gray-500'>hello@example.com</h1>
                    <h1 className='text-gray-500'>support@example.com</h1>
                </div>

                <div className='text-xl space-y-4'>
                    <h1 >Facebook Chat</h1>
                    <h1 className='text-gray-500'>me.freelancer3</h1>
                </div>
            </div>

            <div className='my-16 flex '>
                <div className='flex-auto'>
                    <h1 className=' text-4xl font-bold my-8'>Lets Connect</h1>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-xl font-semibold'>Facebook</h1>
                        <h1 className='text-xl font-semibold'>Twitter</h1>
                        <h1 className='text-xl font-semibold'>Intagram</h1>
                        <h1 className='text-xl font-semibold'>Pinterest</h1>
                        <h1 className='text-xl font-semibold'>Skype</h1>
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
                            <button className="w-2/5 h-12 bg-black text-white rounded-md">Send Message</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetInTouch;