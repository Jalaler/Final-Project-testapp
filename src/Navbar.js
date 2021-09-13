import NavbarStyle from '../src/styles/NavbarStyle.css';

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (

        <div>

            {/* <nav class="bg-white sm:shadow-lg md:shadow-lg lg:shadow-lg fixed right-0 left-0 z-50">
                <div class="flex sm:justify-evenly md:justify-evenly lg:justify-evenly">
                    <div>
                        <a href="/" class="flex items-center py-5">
                            <span class="sm:font-bold md:font-bold lg:font-bold text-yellow-500 md:text-2xl sm:text-2xl lg:text-2xl">MOD Checkup</span>
                        </a>
                    </div>
                    <div class="flex items-center" id="navbar">
                        <a href="/" className="home" class="py-5 px-5 text-gray-700 font-semibold border-b-4 border-yellow-500 hover:text-yellow-500 transition duration-300">Home</a>
                        <a href="/subject" className="subject" class="py-5 px-5 text-gray-500 font-semibold border-b-4 border-transparent hover:text-yellow-500 transition duration-300">Subject</a>
                        <a href="/review" className="review" class="py-5 px-5 text-gray-500 font-semibold border-b-4 border-transparent hover:text-yellow-500 transition duration-300">Review</a>
                        <a href="/history" className="history" class="py-5 px-5 text-gray-500 font-semibold border-b-4 border-transparent hover:text-yellow-500 transition duration-300">History</a>
                    </div>
                    <div class="flex items-center">
                        <a href="#" class="py-2 px-6 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Login</a>
                    </div>
                </div>
            </nav> */}

            <nav class="bg-white sm:shadow-lg md:shadow-lg lg:shadow-lg fixed right-0 left-0 z-50">
                <div class="flex justify-center">
                    <div>
                        <a href="/" class="flex items-center py-5">
                            <span class="sm:font-bold md:font-bold lg:font-bold text-yellow-500 md:text-2xl sm:text-2xl lg:text-2xl">MOD Checkup</span>
                        </a>
                    </div>
                    <ul class="flex items-center pl-52 pr-64 mr-4" id="navbar">
                        <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName="active" to='/subject'>Subject</NavLink></li>
                        <li><NavLink activeClassName="active" to='/review'>Review</NavLink></li>
                        <li><NavLink activeClassName="active" to='/history'>History</NavLink></li>
                    </ul>
                    {/* <ul class="flex items-center pl-52 pr-64 mr-4" id="navbar">
                        <li><a href="/" exact>Home</a></li>
                        <li><a href="/subject">Subject</a></li>
                        <li><a href="/review">Review</a></li>
                        <li><a href="/history">History</a></li>
                    </ul> */}
                    <div class="flex items-center">
                        <a href="#" class="py-2 px-6 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Login</a>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;