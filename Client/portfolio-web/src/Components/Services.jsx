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

      <div className="grid grid-cols-3 ml-[3%] mt-24 gap-4 ">
        <div className="card text-left">
          <div className=" items-left text-left  space-y-6">
            <div className="text-7xl  text-green-600">
              <GiPencilBrush />
            </div>
            <h2 className=" font-semibold text-3xl">Web Development</h2>
            <p className="font-semibold w-11/12">
              Duis molestie enim mattis gravida viverra. Fusce ut eros augue.
              Sed id mauris vel neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className=" items-left text-left  space-y-6">
            <div className="text-7xl  text-green-600">
              <FaLaptopCode />
            </div>
            <h2 className=" font-semibold text-3xl">Coding</h2>
            <p className="font-semibold w-11/12">
              Duis molestie enim mattis gravida viverra. Fusce ut eros augue.
              Sed id mauris vel neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className=" items-left text-left  space-y-6">
            <div className="text-7xl  text-green-600">
              <FaMobileRetro />
            </div>
            <h2 className=" font-semibold text-3xl">App Development</h2>
            <p className="font-semibold w-11/12">
              Duis molestie enim mattis gravida viverra. Fusce ut eros augue.
              Sed id mauris vel neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 ml-[3%] mt-24 gap-4 ">
        <div className="card text-left">
          <div className=" items-left text-left  space-y-6">
            <div className="text-7xl  text-green-600">
              <FaCameraRetro />
            </div>
            <h2 className=" font-semibold text-3xl">Photography</h2>
            <p className="font-semibold w-11/12">
              Duis molestie enim mattis gravida viverra. Fusce ut eros augue.
              Sed id mauris vel neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className=" items-left text-left  space-y-6">
            <div className="text-7xl  text-green-600">
              <RiVideoOnAiLine />
            </div>
            <h2 className=" font-semibold text-3xl">Video Editing</h2>
            <p className="font-semibold w-11/12">
              Duis molestie enim mattis gravida viverra. Fusce ut eros augue.
              Sed id mauris vel neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.
            </p>
            <div className="">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="card text-left">
          <div className=" items-left text-left  space-y-6">
            <div className="text-7xl  text-green-600">
              <FaPenFancy />
            </div>
            <h2 className=" font-semibold text-3xl">Copy Writing</h2>
            <p className="font-semibold w-11/12">
              Duis molestie enim mattis gravida viverra. Fusce ut eros augue.
              Sed id mauris vel neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis.
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
