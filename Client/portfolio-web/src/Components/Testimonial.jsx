import React from "react";
import { BsChatRightQuoteFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className="my-40 lg:w-10/12 mx-auto">
      <div>
        <h1 className="text-center text-4xl font-bold my-20 mt-28">Testimonials</h1>
      </div>

      <div className="carousel w-full">

        <div
          id="slide1"
          className="carousel-item relative w-full grid grid-cols-1 gap-8"
        >
          <div className="text-green-600 text-6xl flex justify-center -mb-4">
            <BsChatRightQuoteFill />
          </div>

          <div>
            <h1 className="text-center text-2xl font-semibold w-2/3 mx-auto">
              "Working with Md. Moonzoor Mamun Munna was a fantastic experience! His attention to detail and ability to bring complex designs to life were incredible. Highly recommend him for any web development project!"
            </h1>
          </div>
          <div className="space-y-4 text-center flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co/hRm9vpc/ken.jpg"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h1 className="text-2xl font-semibold">Eric Wilson</h1>
            <h1 className="text-xl font-semibold text-gray-400">
              Tech Solutions Ltd.
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full grid grid-cols-1 gap-8"
        >
          <div className="text-green-600 text-6xl flex justify-center -mb-4">
            <BsChatRightQuoteFill />
          </div>

          <div>
            <h1 className="text-center text-2xl font-semibold w-2/3 mx-auto">
              "Munna’s ability to troubleshoot and optimize my website was beyond impressive. He went above and beyond to ensure everything was perfect. I'll definitely be hiring him again!"
            </h1>
          </div>
          <div className="space-y-4 text-center flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co/jZ8PKF1/david.jpg"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h1 className="text-2xl font-semibold">David Lee</h1>
            <h1 className="text-xl font-semibold text-gray-400">
              BrightWeb Agency
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
