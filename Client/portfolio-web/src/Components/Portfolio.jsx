import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
      <div className="mt-40">
        <div className="w-5/6 mx-auto my-16">
          <h1 className="text-4xl font-bold">Portfolio</h1>
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-1 w-5/6 mx-auto gap-8">

          
          <div className="lg:mt-12 lg:col-span-2">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co.com/bgx1wMrZ/Screenshot-2025-02-11-014359.png"
                  alt="Skin Care Website"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Skin Care</h2>
                <p className='font-semibold '>Revitalize your skin with customized solutions and products and many quiries.</p>
                <div className="card-actions justify-start">
                <Link to="/CareDetails">
                  <button className="btn rounded-sm bg-green-600 text-white font-semibold">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co.com/yFYssyhL/Screenshot-2025-02-11-013233.png"
                  alt="Sports Equipment E-commerce"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Arsenal </h2>
                <p className='font-semibold w-11/12'>Equip yourself with top-tier gear for every sport and see the latest offers by your choise .</p>
                <div className="card-actions justify-start">
                  <Link to="/ArsenalDetails">
                  <button className="btn rounded-sm bg-green-600 text-white font-semibold">Details</button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>


          <div className="lg:mt-12 lg:col-span-2">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co.com/d0Wtg239/Screenshot-2025-02-11-014153.png"
                  alt="Team Management Website"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-2xl">Team Pulse</h2>
                <p className='font-semibold '>Its a team management webapp .Boost efficiency through enhanced collaboration and project tracking tools .</p>
                <div className="card-actions justify-start">
                <Link to="/TeamPulseDetails">
                  <button className="btn rounded-sm bg-green-600 text-white font-semibold">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Portfolio;
