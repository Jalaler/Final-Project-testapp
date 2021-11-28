import FooterEmpty from "./FooterEmpty";
import Navbar from "./Navbar";
import Scroll from "./ReturntotopButton";
import SubjectReportList from "./SubjectReportList";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import backendURL from './URL';
import useInfiniteScroll from './useInfiniteScroll.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


function ReportPage() {

    const [subject, setSubject] = useState([]);
    const [page, setPage] = useState(2);
    // const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
    const [currentUser, setCurrentUser] = useState({});
    const [userRole, setUserRole] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadData = () => {
        let url = backendURL + '/api/subjects/ratings/avg';
        axios.get(url, { withCredentials: true }).then(res => {
            if (res.data.length > 0) {
                setSubject(res.data)
                checkRole();
            }
        })
            .catch()
    }

    // function moreData() {
    //     let url = backendURL + `/api/subjects/page/${page}/size/10`;
    //     axios.get(url, { withCredentials: true }).then(res => {
    //         setSubject([...subject, ...res.data]);
    //         setPage(page + 1)
    //         setIsFetching(false)
    //     });
    // }

    useEffect(() => {
        loadData()
        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                
                
            })
            
        .catch () 
        setTimeout(()=>{checkRole();},10)     
        
    }, []);

    if (subject.length == 0) {
        return <Box class="flex justify-center items-center h-screen" sx={{ display: 'flex' }}>
        <CircularProgress class="text-yellow-500" />
        <p class="ml-6 font-semibold text-yellow-600">Loading...</p>
    </Box>;;
    }

    
    const subjectList = () => {
        
        return subject.map(currentSubject => {
            return <SubjectReportList subject={currentSubject} currentUser={currentUser} />
        })
    }
    function checkRole(){

        if (currentUser.role == 'ADMIN') {
            setUserRole(true)
        } else if(currentUser.role == 'RESEARCHER'){
            setUserRole(true)
        }else if(currentUser.role == 'SUPERADMIN'){
            setUserRole(true)
        }else{
            setUserRole(false)
        }

        return userRole;

    }


    return (
        <div >
            
            <Navbar />
            <Scroll showBelow={250} />
            <div class="sm:flex px-8 sm:px-0 pt-28 sm:grid sm:grid-cols-2 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/3">
                <a href="/subject" class="flex items-center cursor-pointer transition space-x-2 duration-100 text-gray-400 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-md font-semibold">
                        Back
                    </p>
                </a>
            {/* {!userRole && <div></div>} */}
            {/* {userRole &&  */}
                <div class="flex justify-end">
                    <span class="mr-1 text-gray-400 flex text-md pt-6">(For Researcher)</span>
                    <a href="/csv" class="border-2 border-yellow-400 hover:border-yellow-500 rounded-full bg-white py-2 px-4 flex items-center text-yellow-500 hover:text-yellow-600 transition duration-100">
                        <div class="font-semibold text-lg">
                            CSV Export
                        </div>
                    </a>
                </div>
                {/* } */}
                
            </div>
            <div class="flex justify-center mt-10">
                <iframe class="bg-white rounded-lg shadow-lg w-1/2 h-96" src="https://charts.mongodb.com/charts-project-0-sjcig/embed/charts?id=f265fcd5-0d65-4bb9-9cf5-9cd0ca0d4db7&maxDataAge=10&theme=light&autoRefresh=true"></iframe>
            </div>
            <div class="flex justify-center mt-10">
                <iframe class="bg-white rounded-lg shadow-lg w-1/2 h-96" src="https://charts.mongodb.com/charts-project-0-sjcig/embed/charts?id=73074014-8fc2-47cb-ae93-3f37fd63b4b7&maxDataAge=10&theme=light&autoRefresh=true"></iframe>
            </div>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-0 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/3">
                {subjectList()}
            </div>
            <FooterEmpty />
            </div>
    );
}

export default ReportPage;