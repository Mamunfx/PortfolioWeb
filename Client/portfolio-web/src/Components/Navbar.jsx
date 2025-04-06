import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#banner" className="   hover:underline">Home</a></li>
                            <li><a href="#services" className="hover:underline">Services</a></li>
                            <li><a href="#aboutme" className="hover:underline">About Me</a></li>
                            <li><a href="#skills" className="hover:underline">Skills</a></li>
                            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                            <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
                            
                        </ul>
                    </div>
                    <a className=" absolute top-11 z-10 text-4xl p-3 font-semibold bg-green-500 flex justify-center">M.</a>
                </div>
                <div className="navbar-end hidden lg:flex mr-10">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#banner" className="hover:underline">Home</a></li>
                        <li><a href="#services" className="hover:underline ">Services</a></li>
                        <li><a href="#aboutme" className="hover:underline ">About Me</a></li>
                        <li><a href="#skills" className="hover:underline ">Skills</a></li>
                        <li><a href="#portfolio" className="hover:underline ">Portfolio</a></li>
                        <li><a href="#testimonial" className="hover:underline ">Testimonial</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
