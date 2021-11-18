import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import backendURL from "./URL.js";
import HamburgerMenu from "../src/styles/HamburgerMenu.css";
import axios from 'axios'
import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
        <div class="flex">
            <button type="button" onClick={handleOpen}>
                <div class="flex hidden sm:block lg:mr-10">
                    <a href="#" class="py-2 px-6 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Login</a>
                </div>
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div class="flex flex-col space-y-10 justify-center items-center">
                        <div class="bg-white w-96 shadow-lg rounded-lg p-10">
                            <div class="">
                                <h2 class="text-2xl font-semibold text-gray-700 text-center">Welcome</h2>
                                <p class="text-xl text-gray-500 text-center mt-2">Please login with KMUTT mail</p>
                                <a href={backendURL + "/api/auth/google"} class="flex items-center justify-center mt-8 text-white rounded-lg shadow-md hover:bg-gray-100">
                                    <div class="px-4 py-3">
                                        <svg class="h-6 w-6" viewBox="0 0 40 40">
                                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                        </svg>
                                    </div>
                                    <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>

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
                        <li><a href={'/history/'+ currentUser._id} class="block py-3 text-md mx-5" role="menuitem" tabindex="-1" id="menu-item-2">History</a></li>
                        <li class="pt-2 sm:hidden">
                            <button type="button" onClick={handleOpen}>
                                <div class="flex lg:pr-10 text-center">
                                    <a href="#" class="py-2 px-6 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Login</a>
                                </div>
                            </button>
                        </li>
                        <li class="pb-4 pt-2">
                            <form method="POST" action="#" role="none">
                                <button type="submit" class="block border-2 border-gray-200 ml-6 px-3 py-1 rounded-full text-md text-gray-400" role="menuitem" tabindex="-1" id="menu-item-3">
                                    Sign out
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}