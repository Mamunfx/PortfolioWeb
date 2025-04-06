import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
const Aboutme = () => {
    return (
      <div>
        <h1 className="text-4xl font-bold my-12 mt-20 text-center">About Me</h1>

        <div className="hero min-h-screen bg-gray-600">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content grid grid-cols-2 gap-20">
            <div className="">
              <img
                src="https://i.ibb.co.com/7dGPF6jg/rsz-2img20220417182940-01-1.jpg"
                className="h-[36rem] rounded-2xl"
              />
            </div>
            <div className=" flex flex-col ">
              <div class="relative  text-white border-2 border-white p-5 text-3xl mb-4 w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-white border-r-[10px] border-x-transparent"></div>
                Hi There
              </div>

              <p className="mb-5  text-lg font-semibold text-gray-400 w-11/12">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Lorem ipsum dolor sit amet
                consectetur.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xl mt-4">
                <p className="text-left text-green-500">
                  Name : <p className="text-white text-lg">Md. Mamun</p>
                </p>
                <p className="text-left text-green-500">
                  Email :{" "}
                  <p className="text-white text-lg">md01994@gmail.com</p>
                </p>
                <p className="text-left text-green-500">
                  Phone : <p className="text-white text-lg">01881231528</p>
                </p>
                <p className="text-left text-green-500">
                  Twitter : <p className="text-white text-lg">freelancer10</p>
                </p>
              </div>
              <div className="pt-10 mb-14 border-b align-middle"></div>

              <div className="flex space-x-4 ">
                <button className="btn bg-green-500 text-white border-none rounded-sm text-lg">
                  Contact Me <FaArrowRight />
                </button>
                <button className="btn  border-2 text-white rounded-sm text-lg bg-base-content">
                  Downloa CV <FaDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Aboutme;
