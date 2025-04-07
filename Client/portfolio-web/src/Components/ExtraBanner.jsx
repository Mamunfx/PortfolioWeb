import React from "react";

const ExtraBanner = () => {
  return (
    <div
      className="h-[12rem] w-10/12 mx-auto bg-cover text-center  space-y-6 rounded-sm flex flex-col justify-center items-center relative my-36 "
      style={{
        backgroundImage: "url('https://i.ibb.co/sJpBgD8g/rsz-1freestocks-i-poqp6kcoi-unsplash.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl text-white mb-4">
          Let's work together on our next project
        </h1>

        <div className="absolute top-20 right-[45%]">
        <div class="relative  text-white border-2 border-green-600 bg-green-600 p-3 text-lg font-semibold mb-4 w-fit">
                <div class="absolute bottom-0 left-[25%] transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-[10px] border-t-green-600 border-r-[10px] border-x-transparent"></div>
                Hire me now!
              </div>
        </div>


      </div>
    </div>
  );
};

export default ExtraBanner;
