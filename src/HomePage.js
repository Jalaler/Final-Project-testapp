import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer';
import TopicHome from './TopicHome';
import Scroll from './ReturntotopButton.js';
import PostBox from './PostBox.js';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import backendURL from './URL';
import useInfiniteScroll from './useInfiniteScroll.js';
import SelectRolePage from './SelectRolePage.js'

function HomePage() {

    const [data, setData] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [allComments, setAllComments] = useState([]);
    const [page, setPage] = useState(2);
    const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
    const [urlForSeach, setUrlForSeach] = useState('/subjectsearch');
    const [user,setUser] = useState(false);
    const [role,setRole] =useState(false)
 
    const loadData = () => {
        let url = backendURL + '/api/reviews/page/1/size/10';
        axios.get(url, { withCredentials: true }).then(res => {
            if (res.data.length > 0) {
                setData(res.data)
                setUser(true)
                console.log(user)
            }
        })
            .catch(err => console.log(err))
    }

    function moreData() {
        let url = backendURL + `/api/reviews/page/${page}/size/10`;
        axios.get(url, { withCredentials: true }).then(res => {
            setData([...data, ...res.data]);
            setPage(page + 1)
            setIsFetching(false)
        });
    }

    useEffect(() => {

        loadData()

        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    if (data.length == 0) {
        return <h1>Loading...</h1>;
    }
  
    
    

    const reviewList = () => {
        if(currentUser.role == ''){
            setRole(true)
            console.log(role)
        }

        return data.map(currentPost => {
            return <PostBox data={currentPost} currentUser={currentUser} />
        })
    }

    


    return (
        <div>
            {!user && !role && 
                <div className="HomePage">

                    <Navbar />
                    <Banner urlForSeach={urlForSeach} />
                    <TopicHome />
                    <Scroll showBelow={250} />
                    {reviewList()}
                    <Footer />
                </div>
            }
             {user && !role &&
            
                <div className="HomePage">
                    <Navbar />
                    <Banner urlForSeach={urlForSeach} />
                    <TopicHome />
                    <Scroll showBelow={250} />
                    {reviewList()}
                    <Footer />
                </div>

            } 
             { user && role &&
            
            <div className="HomePage">
                <SelectRolePage />
            </div>

        } 

        </div>
    );
}

export default HomePage;