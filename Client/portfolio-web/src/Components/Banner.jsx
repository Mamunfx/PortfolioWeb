import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gray-600 ">
  
      <div className="hero-content text-neutral-content grid grid-cols-2">

        <div className=" text-left items-start">
          <h1 className="mb-5 text-5xl font-bold">Say Hi from Mamun, Web developer and designer</h1>
          <p className="mb-5 w-4/6">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.
          </p>

          <div className='flex'>
            <div>
              <h1>10+</h1>
              <h1>Years of experiences</h1>
            </div>
            <div>
              <h1>180+</h1>
              <h1>Project completed on 13 countries</h1>
            </div>
          </div>
          
        </div>

        <div>
        <div>
          <h1>MAMUN</h1>
          <h1>Web designer and developer</h1>
        </div>
        <div>
        <img src="https://i.ibb.co.com/jVp4bs5/IMG-8269-2.jpg" className='h-48 w-60 rounded-2xl'/>
        <h1>hello@Mamun.developer</h1>
        <h1>Base in Dhaka,Bangladesh</h1>
        <p>@2022 Mamun. All Right Reserved</p>
        <button className="btn  bg-slate-600 text-white">Hire me</button>
        </div>
      </div>

      </div>

    </div>
  );
};

export default Banner;
