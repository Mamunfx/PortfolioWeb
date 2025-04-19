import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

const TeamPulseDetails = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow my-12 w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto my-12 sm:my-20 px-6 sm:px-8 py-8 sm:py-12 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
            TeamPulse - Employee Management System
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 font-medium leading-relaxed sm:leading-loose mb-8 sm:mb-10 w-full sm:w-11/12">
            TeamPulse is designed for a well-renowned company to monitor
            employee workload, keep records of salaries, contracts, and more.
            This system allows employees to post updates about their workflow
            while enabling the HR Executive to manage, monitor, and process
            employee-related tasks efficiently.
          </p>

          {/* Carousel */}
          <div className="my-10 sm:my-14">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
              <img
                  src="https://i.ibb.co.com/d0Wtg239/Screenshot-2025-02-11-014153.png"
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
                  src="https://i.ibb.co.com/6Symvjr/Screenshot-2025-04-19-182751.png"
                  className="w-full object-scale-down max-h-96 sm:max-h-96"
                  alt="TeamPulse Screenshot"
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
                <li>Employee Dashboard: An intuitive dashboard for employees to post workflow updates and check their tasks.</li>
                <li>HR Executive Panel: A dedicated section for HR Executives to monitor employee workflow and manage administrative tasks.</li>
                <li>Salary Management: Comprehensive salary management, including viewing, processing, and recording salary details.</li>
                <li>Contract Management: Seamless handling of employee contracts with features for creating, viewing, and updating contract information.</li>
                <li>Real-Time Notifications: Real-time notifications for workflow updates and administrative actions.</li>
                <li>User Authentication: Secure login system with role-based access control for different user roles (Employee, HR Executive, Admin).</li>
                <li>Performance Metrics: Detailed analytics and performance metrics to track employee productivity and workload distribution.</li>
                <li>Leave Management: Simplified leave application and approval process for employees and HR Executives.</li>
                <li>Document Storage: Secure storage and management of important documents and files related to employees.</li>
                <li>Communication Tools: Built-in messaging and communication tools to enhance collaboration between employees and HR Executives.</li>
                <li>Report Generation: Automated report generation for payroll, attendance, and performance evaluations.</li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start">
          <a href="https://assignment12-e4afd.web.app/" target="_blank">
              <button className="btn bg-green-600 text-white border-none rounded-sm text-sm sm:text-lg lg:text-xl">
                Live site <FaArrowRight />
              </button>
            </a>
            <a
              href="https://github.com/Mamunfx/TeamPulse"
              target="_blank"
              download="Md_Mamun_CV.pdf"
              className="btn border-2 text-white rounded-sm sm:text-lg lg:text-xl text-sm bg-base-content"
            >
              View code
            </a>
          </div>

          {/* Challenges */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">
              Dependencies
            </h2>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>React Router</li>
              <li>Firebase</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPulseDetails;
