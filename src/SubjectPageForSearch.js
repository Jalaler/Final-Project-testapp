import FooterEmpty from "./FooterEmpty";
import Navbar from "./Navbar";
import Scroll from './ReturntotopButton.js';
import SearchBanner from "./SearchBanner";
import SubjectListType1 from "./SubjectListType1";
import SubjectListType2 from "./SubjectListType2";
import { useState, useEffect } from 'react';
import axios from "axios";
import backendURL from "./URL";
import { useParams } from "react-router";
import { easing } from "@material-ui/core";

function SubjectPageForSearch(){
    const [subject, setSubject] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [urlForSeach,setUrlForSeach] = useState('/subjectsearch');
    const {abbr} = useParams();
    useEffect(() => {
        
        getSubject();
        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))


    }, []);

    function getSubject(){   
             
                 axios.get(backendURL + '/api/subjects/search/' + abbr)
                .then((response) => {
                    setSubject(response.data);
                    console.log(response.data);
                });
    
    }

    if (!subject) return null;

    const subjectList = () => {

        return subject.map(currentSubject => {
            return <SubjectListType1 subject={currentSubject} currentUser={currentUser} />
        })
    }

    return (
        <div className="SubjectPage" class="flex flex-col h-screen">
            <Navbar />
            <SearchBanner urlForSeach={urlForSeach}/>
            <Scroll showBelow={250} />
            <main class="flex-grow">
                <div class="font-bold text-2xl lg:text-3xl pt-36 md:pt-40 pb-4 md:pb-8 flex justify-start md:justify-center w-1/2 ml-10 sm:ml-20 md:ml-0">
                    Subject
                </div>
                {subjectList()}
            </main>
            <footer>
                <FooterEmpty />
            </footer>
        </div>
    );

}
export default SubjectPageForSearch;