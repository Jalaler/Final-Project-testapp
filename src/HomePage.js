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
    const [allComments, setAllComments] = useState([]);
    useEffect(() => {
        axios.get(backendURL + '/api/reviews/', { withCredentials: true })
            .then(res => {
                if (res.data.length > 0) {
                    setData(res.data)
                    console.log(res.data)
                }
            })
            .catch(err => console.log(err))
            data.map(comId => (
                axios.get(backendURL + '/api/comments/post/' + comId._id, { withCredentials: true })
                    .then(res => {
                        if (res.data.length > 0) {
                            setAllComments(res.data)
                            console.log(res.data)
                        }
                    })
                    .catch(err => console.log(err))
                    
            ))

        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const reviewList = () => {
        
        // data.map(comId => (
        //     axios.get(backendURL + '/api/comments/post/' + comId._id, { withCredentials: true })
        //         .then(res => {
        //             if (res.data.length > 0) {
        //                 setAllComments(res.data)
        //                 console.log(res.data)
        //             }
        //         })
        //         .catch(err => console.log(err))
        // ))
        
        return data.map(currentPost => {
            return <PostBox data={currentPost} currentUser={currentUser} />
        })
    }


    return (
        <div className="HomePage">
            <Navbar />
            <Banner />
            <TopicHome />
            <h1>Hi</h1>
            <Scroll showBelow={250} />
            {reviewList()}
            <Footer />
        </div>
    );
}

export default HomePage;