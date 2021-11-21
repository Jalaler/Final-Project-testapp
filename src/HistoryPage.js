import axios from "axios";
import Footer from "./Footer";
import IMAGES from "./IMAGES";
import Navbar from "./Navbar";
import PostBox from "./PostBox";
import React, { useState, useEffect } from 'react';
import backendURL from "./URL";
import Scroll from './ReturntotopButton.js';
import { useParams } from "react-router";

import BackgroundBanner from "../src/styles/BackgroundBanner.css";


function HistoryPage() {

    const [data, setData] = useState([]);
    const { studentId } = useParams();
    const [currentUser, setCurrentUser] = useState({});
    

    useEffect(() => {

        axios.get(backendURL + '/api/reviews/history/' + studentId, { withCredentials: true })
            .then(res => {
                if (res.data.length > 0) {
                    setData(res.data)
                    console.log(res.data)
                }
            })
            .catch(err => console.log(err))
        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const historyList = () => {
        return data.map(currentPost => {
            return <PostBox data={currentPost} his={true} />
        })
    }

    return (
        <div className="HistoryPage" class="flex flex-col h-screen">
            <Navbar />
            <Scroll showBelow={250} />
            <main class="flex-grow">
                <div class="absolute z-40 hidden md:block md:w-16 lg:w-20 pt-44">
                    <img src={IMAGES.BigAnt} class="md:pt-5 lg:pt-1 md:ml-36 lg:ml-60" />
                </div>
                <div class="absolute z-40 hidden md:block md:w-16 lg:w-20 pt-52 md:mr-52 lg:mr-80 right-0">
                    <img src={IMAGES.SmallAnt} class="md:pt-8 lg:pt-5" />
                </div>
                <div class="absolute z-40 hidden md:block md:w-16 lg:w-20 pt-52 md:mr-32 lg:mr-60 right-0">
                    <img src={IMAGES.SmallAnt} class="md:pt-8 lg:pt-5" />
                </div>
                <div class="relative bg-no-repeat bg-top bg-auto z-0 hidden md:block">
                    <img src={IMAGES.BannerBackground3} id="historybannerbg" class="opacity-100 absolute w-full mt-6" />
                </div>
                <div class="relative bg-no-repeat bg-top bg-auto z-0 md:hidden">
                    <div id="historybannerbg2" class="bg-yellow-500 opacity-10 absolute w-full">
                    </div>
                </div>
                <div class="z-40 relative">
                    <div class="pt-36 text-center font-bold text-3xl sm:text-3xl lg:text-4xl">
                        My review history
                    </div>
                </div>
                <div class="pt-36">
                    {historyList()}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HistoryPage;