import Footer from "./Footer";
import Navbar from "./Navbar";
import PostBox from "./PostBox";
import SearchBanner from "./SearchBanner";
import SubjectNameTop from "./SubjectNameTop";
import Scroll from './ReturntotopButton.js';
import backendURL from "./URL";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function SubjectDetailPage() {

    const [data, setData] = useState([]);
    const [sub, setSub] = useState({});
    const { abbr } = useParams()
    useEffect(() => {
        axios.get(backendURL + '/api/subjects/' + abbr + '/posts')
            .then(res => {
                if (res.data.length > 0) {
                    setData(res.data)
                }
            })
            .catch(err => console.log(err))

        axios.get(backendURL + '/api/subjects/' + abbr)
            .then(res => {

                setSub(res.data)

            })
    }, []);

    if(data.length==0){
        return<Box class="flex justify-center items-center h-screen" sx={{ display: 'flex' }}>
        <CircularProgress class="text-yellow-500" />
        <p class="ml-6 font-semibold text-yellow-600">Loading...</p>
    </Box>;
    }

    const reviewList = () => {
        return data.map(currentPost => {
            return <PostBox data={currentPost} />
        })
    }


    return (
        <div>
            <Navbar />
            <SearchBanner />
            <Scroll showBelow={250} />

            <div class="pt-36 md:pt-40 md:flex items-center grid grid-cols-1 w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
                <div class="bg-yellow-500 bg-opacity-20 rounded-full pl-7 pr-5 lg:px-7 py-3 lg:py-4 flex items-center justify-center">
                    <input class="text-black font-bold text-lg lg:text-xl w-20 lg:w-20" type="text" value={sub.subject_abbr} disabled />
                </div>
                <div class="rounded-l-full pt-4 md:pt-0 pl-0 md:pl-8 text-black w-full">
                    <p>
                        <input class="text-md md:text-lg font-bold w-full bg-white" type="text" value={sub.subject_name} disabled />
                    </p>
                    <p>
                        <input class="text-md text-gray-500 w-full bg-white" type="text" value={(sub.subject_name)} disabled />
                    </p>
                </div>
            </div>
            <div class="flex items-center w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
                <div class="mt-8 relative flex justify-center ">
                    <svg class="w-2 h-2 absolute top-0 ml-64 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                    <select class="border border-gray-300 rounded-full font-semibold text-gray-600 h-10 pl-6 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none shadow-md">
                        <option class="font-semibold text-sm">Semester 1 Academic Year 2021</option>
                        <option class="font-semibold text-sm">Semester 2 Academic Year 2020</option>
                        <option class="font-semibold text-sm">Semester 1 Academic Year 2020</option>
                        <option class="font-semibold text-sm">Semester 2 Academic Year 2019</option>
                        <option class="font-semibold text-sm">Semester 1 Academic Year 2019</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-center pt-14">
                <div class="grid grid-cols-3 grid-rows-4 gap-x-2 sm:gap-x-40 gap-y-2 mx-8">
                    <div class="pb-3 font-bold text-lg col-span-3">Course Score</div>
                    <div class="pb-3 font-semibold col-span-2">Teaching:</div>
                    <div class="flex ml-4 sm:ml-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg> */}
                        {sub.teacher_avg}/5
                    </div>
                    <div class="pb-3 font-semibold col-span-2">Bring knowlegde to use:</div>
                    <div class="flex ml-4 sm:ml-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg> */}
                        {sub.usefulness_avg}/5
                    </div>
                    <div class="pb-3 font-semibold col-span-2">Participation:</div>
                    <div class="flex ml-4 sm:ml-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg> */}
                        {sub.participation_avg}/5
                    </div>
                </div>
            </div>
            <div class="flex grid grid-cols-2 mt-14 mb-10 mx-8 w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
                <div class="flex items-center font-bold text-xl md:text-2xl">
                    Review of this course
                </div>
                <div class="flex items-center justify-end">
                    <a href={"/review/" + abbr} class="px-6 py-4 md:px-8 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Write Review!</a>
                </div>
            </div>

            {reviewList()}

            <Footer URL={abbr} />
        </div>
    );
}

export default SubjectDetailPage;