import NavbarStyle from '../src/styles/NavbarStyle.css';
import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginButton from './LoginButton.js';
import ProfileTooltip from '../src/styles/ProfileTooltip.css';

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const tooltip = document.querySelector('#tooltip');

    tooltip.innerHTML = btn.dataset.tooltipText

    btn.addEventListener('mouseenter', () => {
        tooltip.classList.remove('hidden');
    })

    btn.addEventListener('mouseleave', () => {
        tooltip.classList.add('hidden');
    })
})

function Navbar() {
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
                    <li><NavLink activeClassName="active" to='/history'>History</NavLink></li>
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
                    <div class="flex items-center pl-4">
                        <a href="#" class="py-1 px-4 font-semibold text-yellow-500 bg-white border-2 border-yellow-300 rounded-full shadow-md hover:bg-yellow-50 transition duration-300">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;