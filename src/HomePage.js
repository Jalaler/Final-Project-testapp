import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer';
import TopicHome from './TopicHome';
import Scroll from './ReturntotopButton.js';
import PostBox from './PostBox.js';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import backendURL from './URL';


function HomePage() {

    const [data, setData] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        axios.get(backendURL + '/api/reviews/')
            .then(res => {
                if (res.data.length > 0) {
                    setData(res.data)
                }
            })
            .catch(err => console.log(err))
        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const reviewList = () => {
        return data.map(currentPost => {
            return <PostBox data={currentPost} />
        })
    }


    return (
        <div className="HomePage">
            <Navbar />
            <Banner />
            <TopicHome />
            <Scroll showBelow={250} />
            {reviewList()}
            <Footer />
        </div>
    );
}

export default HomePage;