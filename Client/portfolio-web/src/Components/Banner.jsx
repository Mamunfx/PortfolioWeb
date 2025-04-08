import React from 'react';
import { BsSkype } from "react-icons/bs";
import { BsBrowserSafari } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gray-600 mt-16 lg:mt-0 pt-8 lg:pt-12 ">
  
      <div className=" text-neutral-content grid lg:grid-cols-3   w-10/12 py-8 space-y-14 lg:space-y-14">

        <div className=" text-left items-start space-y-8 lg:pt-32 col-span-2 ">
          <h1 className="mb-5 text-[3rem] lg:text-7xl font-semibold w-full lg:w-4/6">Say Hi from Mamun, Web developer and designer</h1>
          <p className="mb-5 w-full lg:w-4/6 font-semibold lg:text-xl">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>

          <div className='flex pt-24 gap-28'>
            <div className='space-y-4'>
              <h1 className='lg:text-7xl text-5xl font-extrabold text-green-500'>10+</h1>
              <h1 >Years of <br /> experiences</h1>
            </div>
            <div className='space-y-4'>
              <h1 className='lg:text-7xl  text-5xl  font-extrabold text-green-500'>180+</h1>
              <h1 >Project completed on <br /> 13 countries</h1>
            </div>
          </div>
          
        </div>

        <div className='border rounded-2xl p-8 px-12 space-y-8 text-center text-lg '>
        <div className='flex justify-between mb-12'>
          <h1 className=' font-bold text-2xl'>MAMUN  </h1>
          <h1 className='text-right text-sm'>Web designer <br />& developer</h1>
        </div>
        <div className='space-y-4 '>
        <img src="https://i.ibb.co.com/jVp4bs5/IMG-8269-2.jpg" className=' 
        lg:h-[26rem] lg:w-[30rem] rounded-2xl object-fill  '/>
        <div>
        <h1>hi@Mamun.developer</h1>
        <h1>Base in Dhaka,Bangladesh.</h1>
        </div>
        <p className='text-xs'>@2022 Mamun. All Right Reserved</p>

        <div className='flex justify-center gap-3 pb-8'>
        <div className='border p-2 rounded-full'>
        <BsSkype />
        </div>
        <div className='border p-2 rounded-full'>
        <BsBrowserSafari />
        </div>
        <div className='border p-2 rounded-full'>
        <IoLogoInstagram />
        </div>
        <div className='border p-2 rounded-full'>
        <FaGithub />
        </div>

        </div>

        <a href="#getintouch"><button className="btn  bg-slate-600 text-white w-full rounded-full">Hire me</button></a>
        </div>
      </div>

      </div>

    </div>
  );
};

export default Banner;