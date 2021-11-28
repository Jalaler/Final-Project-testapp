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
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function HomePage() {

    const [data, setData] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [allComments, setAllComments] = useState([]);
    const [page, setPage] = useState(2);
    const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
    const [urlForSeach,setUrlForSeach] = useState('/subjectsearch');

    const loadData = () =>{
        let url = backendURL + '/api/reviews/page/1/size/10' ;
        axios.get(url, { withCredentials: true }).then(res => {
            if (res.data.length > 0) {
                setData(res.data)
                console.log(res.data)
            }
        })
        .catch(err => console.log(err))
      }

      function moreData() {
        let url = backendURL +`/api/reviews/page/${page}/size/10`;
        axios.get(url,{ withCredentials: true }).then(res => {
          setData([...data, ...res.data]);
          setPage(page+1)
          setIsFetching(false)
        });
      }

    useEffect(() => {
        
        loadData()

        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    if (data.length==0) {
        return  <Box class="flex justify-center items-center h-screen" sx={{ display: 'flex' }}>
                    <CircularProgress class="text-yellow-500" />
                    <p class="ml-6 font-semibold text-yellow-600">Loading...</p>
                </Box>;
      }

    const reviewList = () => {
        
        return data.map(currentPost => {
            return <PostBox data={currentPost} currentUser={currentUser} />
        })
    }


    return (
        <div className="HomePage">
            <Navbar />
            <Banner urlForSeach={urlForSeach} />
            <TopicHome  />
            <Scroll showBelow={250} />
            {reviewList()}
            <Footer />
        </div>
    );
}

export default HomePage;