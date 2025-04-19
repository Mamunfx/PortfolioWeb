import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { RiVideoOnAiLine } from "react-icons/ri";
import { FaPenFancy } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";

const Services = () => {
  
  return (
    <div className="w-11/12 mx-auto ">
      <h1 className="text-4xl font-bold my-8 mt-28 text-center">My Services</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 ml-[3%] mt-24 lg:gap-4 gap-12">
        <div className="card text-left">
          <div className="items-left text-left space-y-6">
            <div className="text-7xl text-green-600">
              <GiPencilBrush />
            </div>
            <h2 className="font-semibold text-3xl">Web Development</h2>
            <p className="font-semibold w-11/12">
              I build responsive and visually appealing websites tailored to client requirements. My focus is on delivering seamless functionality and user-friendly interfaces.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className="items-left text-left space-y-6">
            <div className="text-7xl text-green-600">
              <FaLaptopCode />
            </div>
            <h2 className="font-semibold text-3xl">Coding</h2>
            <p className="font-semibold w-11/12">
              With expertise in multiple programming languages, I provide clean, efficient code that powers high-performance, scalable applications and systems.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className="items-left text-left space-y-6">
            <div className="text-7xl text-green-600">
              <FaMobileRetro />
            </div>
            <h2 className="font-semibold text-3xl">App Development</h2>
            <p className="font-semibold w-11/12">
              I specialize in creating feature-rich mobile applications that combine sleek design with powerful performance, ensuring a smooth user experience.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 ml-[3%] mt-24 lg:gap-4 gap-12 ">
        <div className="card text-left">
          <div className="items-left text-left space-y-6">
            <div className="text-7xl text-green-600">
              <FaCameraRetro />
            </div>
            <h2 className="font-semibold text-3xl">Photography</h2>
            <p className="font-semibold w-11/12">
              Capturing moments with creativity and precision, I deliver high-quality images that convey the perfect mood and message for clients.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className="items-left text-left space-y-6">
            <div className="text-7xl text-green-600">
              <RiVideoOnAiLine />
            </div>
            <h2 className="font-semibold text-3xl">Video Editing</h2>
            <p className="font-semibold w-11/12">
              I craft engaging video content by blending expert editing skills with storytelling, delivering videos that captivate and inspire.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className="items-left text-left space-y-6">
            <div className="text-7xl text-green-600">
              <FaPenFancy />
            </div>
            <h2 className="font-semibold text-3xl">Copy Writing</h2>
            <p className="font-semibold w-11/12">
              I craft compelling, persuasive content tailored to your audience, helping businesses communicate effectively and stand out.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Services;
