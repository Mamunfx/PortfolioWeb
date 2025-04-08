import React from 'react';

const Portfolio = () => {
    return (
      <div className="mt-40">
        <div className="w-5/6 mx-auto my-16">
          <h1 className=" text-4xl font-bold">Portfolio</h1>
        </div>
        <div className="grid grid-cols-7  w-5/6 mx-auto gap-8">
          <div className=' mt-12 col-span-2' >
            <img
              src="https://i.ibb.co.com/bgx1wMrZ/Screenshot-2025-02-11-014359.png"
              
            />
          </div>

         <div className='col-span-3'>
         <img
            src="https://i.ibb.co.com/yFYssyhL/Screenshot-2025-02-11-013233.png"
            alt=""
          />
         </div>

          <div className='mt-12 col-span-2'>
          <img
            src="https://i.ibb.co.com/d0Wtg239/Screenshot-2025-02-11-014153.png"
            alt=""
          />
          </div>

        </div>
      </div>
    );
};

export default Portfolio;