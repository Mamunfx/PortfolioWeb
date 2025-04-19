import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

const ArsenalDetails = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow my-12 w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto my-12  sm:my-20 px-6 sm:px-8 py-8 sm:py-12 bg-gray-100 rounded-lg shadow-md ">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
            Arsenal - Ecommerce Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 font-medium leading-relaxed sm:leading-loose mb-8 sm:mb-10 w-full sm:w-11/12 ">
            Arsenal is a cutting-edge and dynamic ecommerce platform,
            meticulously designed for passionate sports enthusiasts. It provides
            an unparalleled and seamless user experience, while offering robust
            integration with a wide array of advanced e-commerce features.
          </p>

          <div className="my-10 sm:my-14">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co.com/yFYssyhL/Screenshot-2025-02-11-013233.png"
                  className="w-full object-scale-down max-h-96 sm:max-h-96"
                  alt="Slide 1"
                />
                <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co.com/CsJFJHqC/Screenshot-2025-04-19-182034.png"
                  className="w-full object-scale-down max-h-96 sm:max-h-96"
                  alt="Slide 2"
                />
                <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
                Technologies Used
              </h2>
              <ul className="text-sm sm:text-base text-gray-700 space-y-2">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js</li>
                <li>Firebase Authentication</li>
                <li>Firestore Database</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="text-sm sm:text-base text-gray-700 space-y-2">
                <li>Responsive Design</li>
                <li>Dynamic Product Catalog</li>
                <li>User Interaction and Reviews</li>
                <li>Modern and Professional UI/UX</li>
                <li>Integration with E-commerce Platforms</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start">
            <a href="https://arsenal-auth-53462.web.app/" target="_blank">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-sm sm:text-lg lg:text-xl">
                Live site <FaArrowRight />
              </button>
            </a>
            <a
              href="https://github.com/Mamunfx/Arsenal?tab=readme-ov-file"
              target="_blank"
              download="Md_Mamun_CV.pdf"
              className="btn border-2 text-white rounded-sm sm:text-lg lg:text-xl text-sm bg-base-content"
            >
              View code
            </a>
          </div>

          <div className="mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
              Challenges Faced
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Integrating Firebase Authentication securely</li>
              <li>Ensuring seamless responsive design across devices</li>
              <li>Optimizing dynamic product catalog for fast load times</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
              Potential Improvements
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Enhance SEO for better search engine visibility</li>
              <li>Implement advanced analytics for user behavior</li>
              <li>Explore AI-based recommendations for products</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArsenalDetails;
