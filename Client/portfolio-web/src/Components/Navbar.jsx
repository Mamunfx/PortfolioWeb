import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentHash = location.hash || '#banner'; // Default to #banner for Home

    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
                <div className="navbar-end w-full ">
                    <div className="dropdown relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-[1rem]">
                            <li>
                                <a
                                    href="#banner"
                                    className={`${
                                        currentHash === '#banner' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                    }`}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className={`${
                                        currentHash === '#services' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                    }`}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#aboutme"
                                    className={`${
                                        currentHash === '#aboutme' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                    }`}>
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`${
                                        currentHash === '#skills' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                    }`}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className={`${
                                        currentHash === '#portfolio' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                    }`}>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonial"
                                    className={`${
                                        currentHash === '#testimonial' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                    }`}>
                                    Testimonial
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <a className="absolute top-11 left-12 z-10 text-4xl p-3 font-semibold bg-green-500 flex justify-center">M.</a>
                <div className="navbar-center hidden lg:flex mr-10">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li>
                            <a
                                href="#banner"
                                className={`${
                                    currentHash === '#banner' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                }`}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className={`${
                                    currentHash === '#services' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                }`}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutme"
                                className={`${
                                    currentHash === '#aboutme' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                }`}>
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={`${
                                    currentHash === '#skills' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                }`}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className={`${
                                    currentHash === '#portfolio' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                }`}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonial"
                                className={`${
                                    currentHash === '#testimonial' ? 'border-t-2 border-green-600 pt-2 rounded-none' : ''
                                }`}>
                                Testimonial
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
