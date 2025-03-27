import React from "react";

const Testimonial = () => {
  return (
    <div className="my-16">
      <div>
        <h1 className="text-center text-4xl font-bold my-16 mt-28">Testimonial</h1>
      </div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full grid grid-cols-1 gap-6"
        >
          <div>
            <h1 className="text-center text-2xl font-semibold w-2/3 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ut
              veniam dolorum qui adipisci cumque neque quo ipsam, dicta nemo ad
              quae!
            </h1>
          </div>
          <div className="space-y-4 text-center flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co.com/LhXRXLH/IMG-8269-2.jpg"
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <h1 className="text-xl font-semibold text-gray-400">
              Bristol Creative
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
          className="carousel-item relative w-full grid grid-cols-1 gap-6"
        >
          <div>
            <h1 className="text-center text-2xl font-semibold w-2/3 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ut
              veniam dolorum qui adipisci cumque neque quo ipsam, dicta nemo ad
              quae!
            </h1>
          </div>
          <div className="space-y-4 text-center flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co.com/LhXRXLH/IMG-8269-2.jpg"
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <h1 className="text-xl font-semibold text-gray-400">
              Bristol Creative
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
