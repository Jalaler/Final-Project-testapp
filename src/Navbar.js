import NavbarStyle from '../src/styles/NavbarStyle.css';
import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginButton from './LoginButton.js';
import ProfileTooltip from '../src/styles/ProfileTooltip.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import backendURL from './URL';

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const tooltip = document.querySelector('#tooltip');

    // tooltip.innerHTML = btn.dataset.tooltipText

    // btn.addEventListener('mouseenter', () => {
    //     tooltip.classList.remove('hidden');
    // })

    // btn.addEventListener('mouseleave', () => {
    //     tooltip.classList.add('hidden');
    // })
})

function Navbar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)

            })
            .catch(err => console.log(err))
    }, []);

    return (
        <nav class="bg-white shadow-md sm:shadow-md md:shadow-md lg:shadow-lg fixed right-0 left-0 z-50">
            <div class="flex justify-around lg:justify-center space-x-20 sm:space-x-32 md:space-x-40 lg:space-x-44">
                <div>
                    <a href="/" class="flex items-center py-5">
                        <span class="font-bold text-yellow-500 pl-4 md:pl-0 lg:pl-0 text-xl lg:text-2xl">MOD Checkup</span>
                    </a>
                </div>
                <ul class="hidden lg:flex items-center" id="navbar">
                    <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="active" to='/subject'>Subject</NavLink></li>
                    <li><NavLink activeClassName="active" to='/review/GEN111'>Review</NavLink></li>
                    <li><NavLink activeClassName="active" to={'/history/' + currentUser._id}>History</NavLink></li>
                </ul>
                <LoginButton />
                <div class="flex hidden">
                    <button class="" id="btn" aria-describedby="tooltip" data-tooltip-text="ohm.supachai@mail.kmutt.ac.th">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-50" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div class="text-md mt-20 right-2 sm:right-8 md:right-16 lg:right-8 xl:right-auto bg-gray-700 text-white py-2 px-4 absolute rounded-3xl bg-opacity-50 shadow-lg hidden" id="tooltip" role="tooltip">
                    </div>
                    <button type="submit" class="flex items-center ml-4 hidden sm:block">
                        <a href="#" class="py-1 px-4 font-semibold text-yellow-500 bg-white border-2 border-yellow-300 rounded-full shadow-md hover:bg-yellow-50 transition duration-300">Logout</a>
                    </button>

                    <div class="relative lg:hidden flex inline-flex ml-2">
                        <input type="checkbox" id="sortbox" class="hidden absolute" />
                        <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
                            <svg class=" w-8 h-8 text-gray-400 hover:text-green-500"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                        <div id="sortboxmenu" class="absolute right-1 top-full min-w-max rounded-md shadow-lg opacity-0 bg-white border border-gray-300 transition delay-75 ease-in-out z-50">
                            <ul class="block text-center text-gray-600">
                                <li><a href="/" class="block py-3 text-md mx-5 border-b border-b-1 border-opacity-50" role="menuitem" tabindex="-1" id="menu-item-0">Home</a></li>
                                <li><a href="/subject" class="block py-3 text-md mx-5 border-b border-b-1 border-opacity-50" role="menuitem" tabindex="-1" id="menu-item-1">Subject</a></li>
                                <li><a href="/review/GEN111" class="block py-3 text-md mx-5 border-b border-b-1 border-opacity-50" role="menuitem" tabindex="-1" id="menu-item-2">Review</a></li>
                                <li><a href={'/history/' + currentUser._id} class="block py-3 text-md mx-5" role="menuitem" tabindex="-1" id="menu-item-2">History</a></li>
                                <li class="pt-2 sm:hidden">
                                    {/* <button type="button" onClick={handleOpen}>
                                        <div class="flex lg:pr-10 text-center">
                                            <a href="#" class="py-2 px-6 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Login</a>
                                        </div>
                                    </button> */}
                                </li>
                                <li class="pb-4 block sm:hidden">
                                    <form method="POST" action="#" role="none">
                                        {/* <button type="submit" class="block border-2 border-gray-200 ml-6 px-3 py-1 rounded-full text-md text-gray-400" role="menuitem" tabindex="-1" id="menu-item-3">
                                            Sign out
                                        </button> */}
                                        <button type="submit" class="flex items-center mx-auto">
                                            <a href="#" class="py-1 px-4 font-semibold text-yellow-500 bg-white border-2 border-yellow-300 rounded-full shadow-md hover:bg-yellow-50 transition duration-300">Logout</a>
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;