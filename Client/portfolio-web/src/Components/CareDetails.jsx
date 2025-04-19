import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

const CareDetails = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow my-12 w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto my-12 sm:my-20 px-6 sm:px-8 py-8 sm:py-12 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
            Care - Recommendation Giving Website
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 font-medium leading-relaxed sm:leading-loose mb-8 sm:mb-10 w-full sm:w-11/12">
            Care is a recommendation giving website that provides personalized
            product suggestions based on user profiles, preferences, and past
            interactions. It features advanced search and filtering,
            user-generated content, social sharing, and data-driven insights.
          </p>

          {/* Carousel */}
          <div className="my-10 sm:my-14">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
              <img
                  src="https://i.ibb.co.com/bgx1wMrZ/Screenshot-2025-02-11-014359.png"
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
                  src="https://i.ibb.co.com/ycJFsvfK/Screenshot-2025-04-19-183210.png"
                  className="w-full object-scale-down max-h-96 sm:max-h-96"
                  alt="Care Screenshot"
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

          {/* Grid Section */}
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
                <li>User Profiles: Users create profiles with preferences (e.g., budget, interests, style).</li>
                <li>
                  Recommendation Engine: Utilizes collaborative filtering,
                  content-based filtering, or hybrid approaches to suggest
                  relevant products based on user profiles, past purchases, and
                  browsing history.
                </li>
                <li>
                  "Discover" Section: Presents personalized product suggestions
                  tailored to each user's unique preferences.
                </li>
                <li>
                  Flexible Search: Allows users to search by keywords, product
                  categories, brands, price range, availability, and other
                  relevant attributes.
                </li>
                <li>
                  Product Reviews & Ratings: Users can submit detailed reviews,
                  including text, images, and ratings, to help others make
                  informed decisions.
                </li>
                <li>
                  Social Sharing: Enable users to share products, reviews, and
                  recommendations with friends and family on social media.
                </li>
                <li>
                  Analytics Dashboard: Provides administrators with valuable
                  insights into user behavior, popular products, and overall
                  platform performance.
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start">
          <a href="https://assignment11-f5403.web.app/" target="_blank">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-sm sm:text-lg lg:text-xl">
                Live site <FaArrowRight />
              </button>
            </a>
            <a
              href="https://github.com/Mamunfx/skinCare"
              target="_blank"
              download="Md_Mamun_CV.pdf"
              className="btn border-2 text-white rounded-sm sm:text-lg lg:text-xl text-sm bg-base-content"
            >
              View code
            </a>
          </div>

          {/* Enhancements */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
              Enhancements
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Visual Search: Allow users to upload images of products they like to find similar items.</li>
              <li>
                Chatbot Support: Integrate a chatbot to answer user questions,
                provide personalized assistance, and guide users through the
                platform.
              </li>
              <li>
                Augmented Reality (AR): Enable users to visualize how products
                would look in their own space using AR technology.
              </li>
              <li>
                Voice Search: Allow users to search for products using voice
                commands for a more intuitive experience.
              </li>
            </ul>
          </div>

          {/* Key Considerations */}
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
              Key Considerations
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>
                Scalability: Design the platform to handle a growing number of
                users and products while maintaining fast performance.
              </li>
              <li>
                Security: Implement robust security measures to protect user
                data and prevent fraud.
              </li>
              <li>
                Accessibility: Ensure the platform is accessible to users with
                disabilities by adhering to accessibility guidelines (e.g.,
                WCAG).
              </li>
              <li>
                Continuous Improvement: Regularly gather user feedback and
                iterate on the platform based on user needs and market trends.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareDetails;
