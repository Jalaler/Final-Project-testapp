import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer';
import TopicHome from './TopicHome';
import Scroll from './ReturntotopButton.js';
import PostBox from './PostBox.js';
import axios from 'axios'
import React, { useState, useEffect } from 'react';


function HomePage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/reviews/')
        .then(res => {
            if(res.data.length > 0){
                setData(res.data)
            }
        })
        .catch(err => console.log(err))
    });

    const reviewList = () => {
        return data.map( currentPost => {
            return <PostBox data={currentPost}/>
        })
    }

    return (
        <div className="HomePage">
            <Navbar />
            <Banner />
            <TopicHome />
            {reviewList()}

            <Footer />
        </div>
    );
}

export default HomePage;