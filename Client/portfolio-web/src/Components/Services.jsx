import React from "react";

const Services = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-8 mt-20 text-center">My Services</h1>

      <div className="grid grid-cols-3 w-11/12 mx-auto space-y-4">

        <div className="card w-96 ">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title">Web Development</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 ">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title">Coding</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 ">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title">App Development</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default Services;
