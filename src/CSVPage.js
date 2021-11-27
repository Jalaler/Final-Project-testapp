import Navbar from "./Navbar";
import Scroll from './ReturntotopButton.js';
import backendURL from "./URL";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import FooterEmpty from "./FooterEmpty";

function CSVPage() {

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

    return (
        <div class="flex flex-col h-screen">
            <Navbar />
            <Scroll showBelow={250} />
            <main class="flex-grow">
                <div class="sm:pt-3">
                    <div class="flex pl-8 sm:px-0 pt-28 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/3">
                        <a href="/report" class="flex items-center cursor-pointer transition space-x-2 duration-100 text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-md font-semibold">
                                Back
                            </p>
                        </a>
                    </div>
                </div>
                <div class="mt-16 sm:mt-32 grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-y-16 sm:gap-2 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/3">
                    <div class="mx-auto">
                        <a href={backendURL + '/api/subjects/csv/export', { withCredentials: true }} download="mod-checkup-subjects.csv">
                            <img src="https://cdn-icons-png.flaticon.com/512/617/617502.png" class="w-14 h-14 cursor-pointer mx-auto" />
                        </a>
                        <p class="text-xl font-semibold mt-6 sm:mt-8">Subjects</p>
                    </div>
                    <div class="mx-auto">
                        <a href={backendURL + '/api/subjects/csv/export', { withCredentials: true }} download="mod-checkup-subjects.csv">
                            <img src="https://cdn-icons-png.flaticon.com/512/617/617502.png" class="w-14 h-14 cursor-pointer mx-auto" />
                        </a>
                        <p class="text-xl font-semibold mt-6 sm:mt-8">Reviews</p>
                    </div>
                    <div class="mx-auto">
                        <a href={backendURL + '/api/subjects/csv/export', { withCredentials: true }} download="mod-checkup-subjects.csv">
                            <img src="https://cdn-icons-png.flaticon.com/512/617/617502.png" class="w-14 h-14 cursor-pointer mx-auto" />
                        </a>
                        <p class="text-xl font-semibold mt-6 sm:mt-8">Comments</p>
                    </div>
                </div>
            </main>
            <footer>
                <FooterEmpty />
            </footer>
        </div>
    );
}

export default CSVPage;