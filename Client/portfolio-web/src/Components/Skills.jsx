import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
    return (
      <div className="my-8">
        <div>
          <h1 className="text-center font-bold text-4xl lg:my-20 my-12 mt-24 ">Skills Set</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto gap-16 lg:gap-8">
          <div className="text-lg space-y-8">
            <h1 className="text-3xl font-semibold">
              Every Day is a New Challenge
            </h1>
            <p className="text-md font-semibold text-gray-500">
              I approach every coding task with meticulous attention to detail, ensuring my work is both functional and visually appealing. Each project is an opportunity to learn and grow.
            </p>
            <p className="text-md font-semibold text-gray-500">
              My expertise spans front-end and full-stack web development, with proficiency in React, Tailwind CSS, MongoDB, and responsive design principles to create exceptional user experiences.
            </p>
           
            <a href='#getintouch' className="btn bg-green-500 text-white border-none rounded-sm text-lg">
                  Contact Me <FaArrowRight />
                </a>
            
          </div>

          <div className="text-xl space-y-8 font-semibold">
            
            <div className="flex justify-between">
              <h1>Web Design</h1>
              <div class="relative   border-2 border-black p-1 text-sm w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-black border-r-[10px] border-x-transparent"></div>
                100%
              </div>
            </div>

            <div className=' border-b-4 border-green-500 '>
            </div>
            

            <div className="flex justify-between pt-4 w-11/12">
              <h1>Photography</h1>
              <div class="relative   border-2 border-black p-1 text-sm w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-black border-r-[10px] border-x-transparent"></div>
                90%
              </div>
            </div>

            <div className=' border-b-4 border-green-500  w-11/12'>
            </div>

            <div className="flex justify-between pt-4">
              <h1>Coding</h1>
              <div class="relative   border-2 border-black p-1 text-sm w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-black border-r-[10px] border-x-transparent"></div>
                100%
              </div>
            </div>

            <div className=' border-b-4 border-green-500 '>
            </div>

            <div className="flex justify-between pt-4 w-7/12">
              <h1>Copywriting</h1>
              <div class="relative   border-2 border-black p-1 text-sm w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-black border-r-[10px] border-x-transparent"></div>
                50%
              </div>
            </div>

            <div className=' border-b-4 border-green-500 w-6/12'>
            </div>

          </div>
        </div>
      </div>
    );
};

export default Skills;
