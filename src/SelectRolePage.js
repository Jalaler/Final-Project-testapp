import IMAGES from './IMAGES.js';
import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Navbar from './Navbar.js';
import Modal from '@material-ui/core/Modal';
import backendURL from './URL';
import axios from 'axios';

function SelectRolePage() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [currentUser, setCurrentUser] = useState({});
    const [selectRole, setSelectRole] = useState([]);
    useEffect(() => {
        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function roleStudent() {
        const role = {
            role : "STUDENT"
        }
        axios.put(backendURL + '/api/users/' + currentUser._id + '/student',role, { withCredentials: true })
            .then(res => console.log.res.data)
            .catch(err => console.log(err.message));
        

    }

    function roleTeacher() {

        const role = {
            role : "TEACHER"
        }
    
        axios.put(backendURL + '/api/users/' + currentUser._id + '/teacher',role, { withCredentials: true })
            .then(res => console.log.res.data)
            .catch(err => console.log(err.message));
            

    }


    return (

        <div>
            <div class="hidden">
                <Navbar />
            </div>
            <img src={IMAGES.Orange1} class="absolute z-40 hidden md:block md:w-36 lg:w-44 pt-10" />
            <img src={IMAGES.Orange2} class="absolute z-40 hidden md:block md:w-36 lg:w-40 bottom-0 right-0" />
            <div class="min-h-screen bg-gradient-to-t from-yellow-200 to-yellow-50 flex flex-col justify-center">
                <div class="flex justify-center">
                    <p class="text-4xl font-bold text-black text-center">Welcome to MOD Checkup!</p>
                </div>
                <div class="flex justify-center mt-5 sm:mt-20">
                    <p class="text-lg font-semibold text-gray-700">Please select your role to enter this site</p>
                </div>
                <div class="relative m-3 flex flex-wrap mx-auto justify-center">
                    <button onClick={handleOpen} class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-3 my-3 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 motion-reduce:transform-none">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={IMAGES.Student} />
                        </div>
                        <div class="mt-6 mb-5 flex justify-center">
                            <div>
                                <p class="text-xl font-semibold text-gray-900 mb-0">Student</p>
                            </div>
                        </div>
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div class="mx-4 sm:mx-0 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none" id="modal-id">
                            <div class="w-full max-w-lg px-5 py-7 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                                <div>
                                    <div class="text-center p-5 flex-auto justify-center">
                                        <h2 class="text-2xl font-bold pb-6">Student</h2>
                                        <p class="text-md text-gray-500 px-4 sm:px-8">Are you student?</p>
                                        <p class="text-md text-gray-500 px-4 sm:px-8 mt-1">Press confirm button to confirm your role</p>
                                    </div>
                                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                                        <button onClick={handleClose} class="mb-2 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 transition duration-300">
                                            Cancel
                                        </button>
                                        <a href="/" class="mb-2 bg-green-500 border border-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600 transition duration-300" onClick={roleStudent}>
                                            Confirm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    <button onClick={handleOpen2} class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-3 my-3 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 motion-reduce:transform-none">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={IMAGES.Teacher} />
                        </div>
                        <div class="mt-6 mb-5 flex justify-center">
                            <div>
                                <p class="text-xl font-semibold text-gray-900 mb-0">Teacher</p>
                            </div>
                        </div>
                    </button>
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div class="mx-4 sm:mx-0 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none" id="modal-id">
                            <div class="w-full max-w-lg px-5 py-7 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                                <div>
                                    <div class="text-center p-5 flex-auto justify-center">
                                        <h2 class="text-2xl font-bold pb-6">Teacher</h2>
                                        <p class="text-md text-gray-500 px-4 sm:px-8">Are you teacher?</p>
                                        <p class="text-md text-gray-500 px-4 sm:px-8 mt-1">Press confirm button to confirm your role</p>
                                    </div>
                                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                                        <button onClick={handleClose2} class="mb-2 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 transition duration-300">
                                            Cancel
                                        </button>
                                        <a href="/" class="mb-2 bg-green-500 border border-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600 transition duration-300" onClick={roleTeacher}>
                                            Confirm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>

    );
}

export default SelectRolePage;