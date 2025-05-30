import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Aboutme = () => {
    return (
      <div>
        <h1 className="text-4xl font-bold my-12 mt-36 text-center">About Me</h1>

        <div className="hero bg-gray-600">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="w-10/12 text-neutral-content grid grid-cols-1 lg:grid-cols-2 gap-8 py-28">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co.com/7dGPF6jg/rsz-2img20220417182940-01-1.jpg"
                className="lg:h-[36rem] h-[28rem] object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div class="relative text-white border-2 border-white p-5 text-4xl mb-4 w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-white border-r-[10px] border-x-transparent"></div>
                Hi There
              </div>

              <p className="mb-5 text-xl font-semibold text-gray-400 w-11/12">
  I create dynamic, user-friendly websites with creativity and precision. My journey began with a love for coding, mastering React, Tailwind CSS, and MongoDB. Beyond programming, I’m passionate about fitness, tech gadgets, and exploring Halal investments, all with a detail-focused approach to achieving excellence.
</p>


              <div className="grid grid-cols-2 gap-4 text-2xl mt-4">
                <p className="text-left text-green-500">
                  Name : <p className="text-white text-lg">Md. Mamun</p>
                </p>
                <p className="text-left text-green-500">
                  Email :{" "}
                  <p className="text-white text-lg">md0199@gmail.com</p>
                </p>
                <p className="text-left text-green-500">
                  Phone : <p className="text-white text-lg">01881231528</p>
                </p>
                <p className="text-left text-green-500">
                  Twitter : <p className="text-white text-lg">Md.Moonzoor</p>
                </p>
              </div>
              <div className="pt-10 mb-14 border-b align-middle"></div>

              <div className="flex lg:space-x-8 gap-4">
                <a href="#getintouch">
                  <button className="btn bg-green-600 text-white border-none rounded-sm text-md lg:text-xl">
                    Contact Me <FaArrowRight />
                  </button>
                </a>

                <a
                  href="/MD_MoonzoorMamun _Munna.pdf" 
                  download="Md_Mamun_CV.pdf" 
                  className="btn border-2 text-white rounded-sm lg:text-xl text-md bg-base-content"
                >
                  Download CV <FaDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Aboutme;
