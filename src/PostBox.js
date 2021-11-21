import PostBoxDesign from "../src/styles/PostBoxDesign.css";
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import EditPage from "./EditPage";
import { Link } from "react-router-dom";
import LikeCheckbox from '../src/styles/LikeCheckbox.css';
import backendURL from "./URL";
import Modal from '@material-ui/core/Modal';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function PostBox(props) {

    function LikePost() {
        const like_btn = document.querySelector('.like_btn');
        const like_count = document.querySelector('#like_count');
        if (like_btn.checked) {
            like_count.value++;
        } else {
            like_count.value--;
        }
    }
    function DislikePost() {
        const dislike_btn = document.querySelector('.dislike_btn');
        const dislike_count = document.querySelector('#dislike_count');
        if (dislike_btn.checked) {
            dislike_count.value++;
        } else {
            dislike_count.value--;
        }
    }



    function deletePost() {

        axios.delete(backendURL + '/api/reviews/' + props.data._id, { withCredentials: true })
            .then(res => console.log.res.data)
            .catch(err => console.log(err.message));

        window.location.reload();

    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [allComments, setAllComments] = useState([]);
    // const  setComments = useState([])

    useEffect(() => {

        // axios.get(backendURL + '/api/comments/post/' + props.data._id, { withCredentials: true })
        //     .then(res => {
        //         if (res.data.length > 0) {
        //             setAllComments(res.data)
        //             console.log(res.data)
        //         }
        //     })
        //     .catch(err => console.log(err))


    }, []);
    const [allStudentComment, setAllStudentComment] = useState([]);
    function commentsPost() {
        let comment_detail = document.getElementsByName('testcomment').values;
        console.log(comment_detail);
        let basePost = props.data._id;
        let commenter = props.currentUser._id;

        const comment = {
            comment_detail: comment_detail,
            basePost: basePost,
            commenter: commenter,
            active: true
        }

        axios.post(backendURL + '/api/comments', comment, { withCredentials: true })
            .then(res => console.log.res.data)
            .catch(err => console.log(err.message));

        setAllStudentComment((prevAllStudentComment) => {
            return [...prevAllStudentComment, comment];
        });


        window.location.reload();
    }


    return (
        <div class="grid grid-row-2 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-1/2">
            {/* <script>
                 if ({props.his==true}) { */}
                    <div class="flex justify-end mt-10 mr-4 sm:mr-0">
                        <a href={'/edit/' + props.data._id} key={props.data._id} class="cursor-pointer py-3 px-6 font-semibold text-white bg-gray-400 rounded-full shadow-md hover:bg-gray-500 transition duration-300">Edit</a>
                        <button /* href="" key="" */ onClick={handleOpen} class="cursor-pointer ml-2 py-3 px-4 font-semibold text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 transition duration-300">Delete</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none" id="modal-id">
                                <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                                    <div class="">
                                        <div class="text-center p-5 flex-auto justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </svg>
                                            <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                                            <p class="text-sm text-gray-500 px-8">Do you really want to delete your post? This process cannot be undone</p>
                                        </div>
                                        <div class="p-3  mt-2 text-center space-x-4 md:block">
                                            <button onClick={handleClose} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 transition duration-300">
                                                Cancel
                                            </button>
                                            <button onClick={deletePost} class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 transition duration-300">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                 {/* } 
            </script> */}
            <main class="pt-3 pb-8 bg-white">
                <section class="shadow-lg row rounded-xl bg-yellow-100 bg-opacity-5">
                    <div class="tabs">
                        <div class="border-b tab">
                            <div class="border-l-4 border-t-4 border-r-4 border-yellow-400 border-opacity-50 rounded-t-xl border-transparent relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-10 top-52 md:h-28 md:top-0" type="checkbox" id="chck1" />
                                <header class="md:flex justify-between items-center p-6 sm:p-8 cursor-pointer select-none tab-label" for="chck1">
                                    <div class="flex font-semibold text-lg bg-yellow-500 bg-opacity-20 text-black rounded-full px-7 py-2 mb-4 md:mb-0 flex items-center justify-center">
                                        {props.data.reviewedSubject.subject_abbr}
                                    </div>
                                    <div class="rounded-l-full w-full px-1 md:pl-6 text-black">
                                        <p class="text-lg font-semibold">{props.data.reviewedSubject.subject_name}</p>
                                        <p class="text-md text-gray-400">({props.data.reviewedSubject.subject_abbr})</p>
                                    </div>
                                    <div class="flex font-bold pr-9 mt-4 md:mt-0">
                                        <span class="text-lg bg-white text-yellow-600 px-4 py-2 shadow-lg border-2 border-yellow-400 rounded-full">
                                            {props.data.grade_received}
                                        </span>
                                    </div>
                                    <div class="flex rounded-full border border-grey mx-auto mt-4 md:mt-0 w-1/2 md:w-10 h-7 items-center justify-center test">
                                        {/* <!-- icon by feathericons.com --> */}
                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div class="pb-8 px-6 sm:pl-10 sm:pr-10 md:pl-44 md:pr-24">
                                    {`${props.data.review_detail}`}
                                </div>
                                <div class="tab-content">
                                    <div class="pl-6 md:pl-40 pr-8 pb-6 text-grey-darkest">
                                        <div class="">
                                            <div class="flex">
                                                <div class="pb-8 pr-4 font-semibold sm:pl-4">Section:</div>
                                                <div>{props.data.section}</div>
                                            </div>
                                            <div class="grid grid-cols-3 md:grid-cols-2 grid-rows-3 gap-1 sm:pl-4">
                                                <div class="pb-1 font-semibold col-span-2 md:col-span-1">Teaching:</div>
                                                <div class="flex space-x-1">
                                                    {props.data.teacher_rating}/5
                                                </div>
                                                <div class="pb-1 font-semibold col-span-2 md:col-span-1">Bring knowledge to use:</div>
                                                <div class="flex space-x-1">
                                                    {props.data.usefulness_rating}/5
                                                </div>
                                                <div class="pb-1 font-semibold col-span-2 md:col-span-1">Partipation:</div>
                                                <div class="flex space-x-1">
                                                    {props.data.participation_rating}/5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="border-t-2 border-b-4 border-l-4 border-r-4 border-yellow-400 border-opacity-50 rounded-b-xl bg-yellow-300 bg-opacity-5">

                            <div class="flex border-yellow-400 border-opacity-50 border-transparent relative">
                                <header class="flex items-center p-4 pl-8 pr-8 select-none">
                                    <a href="/comment" class="px-3 py-1 bg-gray-100 bg-opacity-75 hover:bg-gray-200 hover:bg-opacity-75 font-semibold rounded-full shadow-md transition duration-100">
                                        2 Comments
                                    </a>
                                    <div class="flex items-center absolute right-0 pr-4">
                                        <label class="flex justify-end items-center relative cursor-pointer select-none w-24 h-10 rounded-xl hover:bg-blue-50 transition duration-100">
                                            <input type="checkbox" onClick={LikePost} class="like_btn like_checkbox absolute cursor-pointer appearance-none w-24 h-10 rounded-xl"></input>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="like_icon z-10 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                            <input type="number" id="like_count" value={props.data.like_rating} class="like_input z-10 pl-2 w-10"></input>
                                        </label>
                                        <label class="flex justify-end items-center relative cursor-pointer select-none w-24 h-10 rounded-xl hover:bg-red-50 transition duration-100">
                                            <input type="checkbox" onClick={DislikePost} class="dislike_btn dislike_checkbox absolute cursor-pointer appearance-none w-24 h-10 rounded-xl"></input>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="dislike_icon z-10 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                                            </svg>
                                            <input type="number" id="dislike_count" value={props.data.dislike_rating} class="like_input z-10 pl-2 w-10"></input>
                                        </label>
                                    </div>
                                </header>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </div>
    );

}

export default PostBox;