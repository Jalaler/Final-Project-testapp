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

function SubjectPage() {

    const [subject, setSubject] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [urlForSeach,setUrlForSeach] = useState('/subjectsearch');
    const {search} = useParams();
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
        
            axios.get(backendURL + '/api/subjects')
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
                <div class="pt-36 md:pt-40 pb-4 md:pb-8 flex justify-around">
                    <div class="font-bold text-2xl lg:text-3xl items-center">
                        Subject
                    </div>
                    <a href="/report" class="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition duration-100">
                        <div class="font-semibold text-md">
                            Report
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                {subjectList()}
            </main>
            <footer>
                <FooterEmpty />
            </footer>
        </div>
    );
}

export default SubjectPage;