import React from 'react';

const ExtraBanner = () => {
    return (
        <div className='h-60 bg-blue-200 text-center my-6 space-y-6 rounded-lg flex flex-col justify-center'>
            <div>
            <h1 className='text-4xl'>Lets work together on our next project</h1>
            </div>
            <div class="relative  text-white border-2 bg-green-500 border-green-500 p-2 text-xl font-semibold mb-4 w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-green-500 border-r-[10px] border-x-transparent"></div>
                Hire me now!
              </div>
        </div>
    );
};

export default ExtraBanner;