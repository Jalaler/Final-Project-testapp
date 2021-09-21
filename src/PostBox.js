import PostBoxDesign from "../src/styles/PostBoxDesign.css";
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import EditPage from "./EditPage";
import { Link } from "react-router-dom";


function PostBox(props) {



    return (
        <div>
            <main class="w-3/5 p-8 mx-auto bg-white" key={props.data._id} >
                <section class="shadow-lg row rounded-xl bg-yellow-100 bg-opacity-5">
                    <div class="tabs">
                        <div class="flex justify-center pl-96">
                            <a href={'/edit/' + props._id} class="ml-96 py-3 px-8 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Edit</a>


                        </div>
                        <div class="border-b tab">
                            <div class="border-l-4 border-t-4 border-r-4 border-yellow-400 border-opacity-50 rounded-t-xl border-transparent relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-12" type="checkbox" id="chck1" />
                                <header class="flex justify-between items-center pt-8 pb-7 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                    <div class="flex font-semibold text-lg bg-yellow-500 bg-opacity-20 text-black rounded-full px-7 py-2 flex items-center justify-center">
                                        {props.data.reviewedSubject.subject_abbr}
                                    </div>
                                    <div class="rounded-l-full w-full pl-6 text-black">
                                        <p class="text-lg font-semibold">{props.data.reviewedSubject.subject_name}</p>
                                        <p class="text-md text-gray-400">({props.data.reviewedSubject.subject_abbr})</p>
                                    </div>
                                    <div class="font-bold pr-9">
                                        <span class="text-lg bg-white text-yellow-600 px-4 py-2 shadow-lg border-2 border-yellow-400 rounded-full">
                                            {props.data.grade_received}
                                        </span>
                                    </div>
                                    <div class="rounded-full border border-grey w-10 h-7 flex items-center justify-center test">
                                        {/* <!-- icon by feathericons.com --> */}
                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>

                                    </div>
                                </header>
                                <div class="pl-44 pr-24 pb-8">
                                    {`${props.data.review_detail}`}
                                </div>
                                <div class="tab-content">
                                    <div class="pl-36 pr-8 pb-6 text-grey-darkest">
                                        <div class="pl-8">
                                            <div class="flex">
                                                <div class="pb-3 pr-4 font-semibold">Section:</div>
                                                <div>{props.data.section}</div>
                                            </div>
                                            <div class="flex">
                                                <div class="pb-8 pr-4 font-semibold">Teacher:</div>
                                                <div>(Teacher Name)</div>
                                            </div>

                                            <div class="grid grid-cols-2 grid-rows-3 gap-1">
                                                <div class="pb-3 font-semibold">Teaching:</div>
                                                <div class="flex space-x-1">
                                                    {props.data.teacher_rating}
                                                </div>
                                                <div class="pb-3 font-semibold">Bring knowlegde to use:</div>
                                                <div class="flex space-x-1">
                                                    {props.data.usefulness_rating}
                                                </div>

                                                <div class="pb-3 font-semibold">Partipation:</div>
                                                <div class="flex space-x-1">
                                                    {props.data.participation_rating}

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>

                        <div class="border-t border-yellow-400 border-opacity-50 bg-yellow-300 bg-opacity-5">
                            <div class="flex border-l-4 border-b-4 border-r-4 border-yellow-400 border-opacity-50 rounded-b-xl border-transparent relative">
                                <header class="flex items-center p-5 pl-8 pr-8 select-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <div class="flex items-center absolute right-0 pr-10">
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                            <p class="pl-2">
                                                {props.data.like_rating}
                                            </p>
                                        </div>
                                        <div class="flex items-center pl-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                                            </svg>
                                            <p class="pl-2">
                                                {props.data.dislike_rating}
                                            </p>
                                        </div>
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