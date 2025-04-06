import React from 'react';

const Portfolio = () => {
    return (
        <div className='mt-40'>
            <div className='w-5/6 mx-auto my-16'>
                <h1 className=' text-4xl font-bold'>Portfolio</h1>
            </div>
            <div className='grid grid-cols-3 w-5/6 mx-auto gap-8'>
                <img src="https://i.ibb.co.com/bgx1wMrZ/Screenshot-2025-02-11-014359.png" alt="" />
                
                <img src="https://i.ibb.co.com/yFYssyhL/Screenshot-2025-02-11-013233.png" alt="" />
                <img src="https://i.ibb.co.com/WFtfds0/kyle-pham-nju-Ys5k-FJ3s-unsplash.jpg" alt="" />
                <img src="https://i.ibb.co.com/60YSb5F/de-cock.jpg" className='h-[16rem]'/>
                <img src="https://i.ibb.co.com/d0Wtg239/Screenshot-2025-02-11-014153.png" alt="" />
            </div>
        </div>
    );
};

export default Portfolio;