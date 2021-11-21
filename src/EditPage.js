import Navbar from "./Navbar";
import Scroll from './ReturntotopButton.js';
import FooterReview from "./FooterReview";
import SearchBanner from "./SearchBanner";
import SubjectNameTop from "./SubjectNameTop";
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import sentParam from "./PostBox";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SelectRadio from '../src/styles/SelectRadio.css';
import { useParams } from "react-router";
import { list } from "purgecss/node_modules/postcss";
import backendURL from "./URL";

function EditPage(props) {

    function getValue() {

        let section = document.getElementById('section_No').value;
        let review_detail = document.getElementById('message').value;
        let scoreTeachingInput = document.getElementsByName('scoreTeaching');
        let gradeReceiveInput = document.getElementsByName('gradeReceive');
        let scoreKnowledgeInput = document.getElementsByName('scoreKnowledge');
        let scoreParticipationInput = document.getElementsByName('scoreParticipation');
        let academic_year = document.getElementById('academic_year').value;
        let semester = document.getElementById('Semester').value;
        let student_id = document.getElementById('student_Id').value;
        let subject_id = document.getElementById('subject_id').value;

        let grade_received;
        for (let index = 0; index < gradeReceiveInput.length; index++) {
            if (gradeReceiveInput[index].checked) {
                grade_received = gradeReceiveInput[index].value;
                break;
            }
        }

        let teacher_rating;
        for (let index = 0; index < scoreTeachingInput.length; index++) {
            if (scoreTeachingInput[index].checked) {
                teacher_rating = index + 1;
                break;
            }
        }

        let usefulness_rating;
        for (let index = 0; index < scoreKnowledgeInput.length; index++) {
            if (scoreKnowledgeInput[index].checked) {
                usefulness_rating = index + 1;
                break;
            }
        }

        let participation_rating;
        for (let index = 0; index < scoreParticipationInput.length; index++) {
            if (scoreParticipationInput[index].checked) {
                participation_rating = index + 1;
                break;
            }
        }

        let reviewedSubject = sub._id;
        let reviewer = currentUser._id;
        const review = {
            grade_received: grade_received,
            teacher_rating: teacher_rating,
            usefulness_rating: usefulness_rating,
            participation_rating: participation_rating,
            academic_year: academic_year,
            semester: semester,
            reviewer: "6124839e65cfb652d8df2b67",
            reviewedSubject: reviewedSubject,
            active: true,
            review_detail: review_detail,
            section: section,
            force: true
        }
        return review;
    }

    const [data, setData] = useState({});
    const [sub, setSub] = useState({});
    const { postId } = useParams()
    const [currentUser, setCurrentUser] = useState({});

    const [allStudentReview, setAllStudentReview] = useState([]);

    function onReviewSubmit(event) {
        event.preventDefault();
        const newReview = getValue();
        if (newReview.grade_received != null &&
            newReview.teacher_rating != null &&
            newReview.usefulness_rating != null &&
            newReview.participation_rating != null) {
            axios.put(backendURL + '/api/reviews/' + postId, getValue(),{ withCredentials: true })
                .then(res => console.log.res.data)
                .catch(err => console.log(err.message));

            setAllStudentReview((prevAllStudentReview) => {
                return [...prevAllStudentReview, getValue];
            });

            setTimeout(function () {
                window.location = '/';
            }, 2000);

            setOpen(true);

        } else {
            return false;
        }
    }

    useEffect(() => {
        axios.get(backendURL + '/api/reviews/' + postId)
            .then((response) => {
                setData(response.data);
                setSub(response.data.reviewedSubject);
            });

        axios.get(backendURL + '/api/users/current', { withCredentials: true })
            .then(res => {
                setCurrentUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }, []);

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="ReviewPage">
            <Navbar />
            <SearchBanner />
            <Scroll showBelow={250} />

            <div class="flex flex-wrap pt-36 md:pt-40 justify-evenly">
                <div class="md:flex items-center w-5/6 md:w-2/3 lg:w-3/5">
                    <div class="bg-yellow-500 bg-opacity-20 rounded-full pl-7 pr-5 lg:px-7 py-3 lg:py-4 flex items-center justify-center">
                        <input class="text-black font-bold text-lg lg:text-xl w-20 lg:w-20" type="text" value={sub.subject_abbr} disabled />
                    </div>
                    <div class="rounded-l-full pt-4 md:pt-0 pl-0 md:pl-8 text-black w-full">
                        <p>
                            <input class="text-md md:text-lg font-bold w-full bg-white" type="text" value={sub.subject_name} disabled />
                        </p>
                        <p>
                            <input class="text-md text-gray-500 w-full bg-white" type="text" value={(sub.subject_name)} disabled />
                        </p>
                    </div>
                </div>
                <div class="hidden md:block"></div>
            </div>

            <form onSubmit={onReviewSubmit}>

                <div class="mt-16 flex grid grid-cols-2 w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <div class="flex font-bold text-lg items-center">
                        Write review of this course
                    </div>
                    <div class="flex items-center justify-center justify-self-end">
                        <a href="/Review" class="py-3 px-8 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Clear</a>
                    </div>
                </div>

                <div class="flex grid grid-cols-5 w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <div class="flex items-center mt-10 lg:mt-0 text-lg font-semibold col-span-5 lg:col-span-1" >
                        Grade:
                        <div class="flex items-center font-bold text-xl text-red-500 pb-5 pl-4">*</div>
                    </div>
                    <div class="max-w-screen-xl mt-2 lg:mt-10 mb-10 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5 col-span-3 justify-self-start" required >
                        <div class="flex w-full relative lg:space-x-1">
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeA" value="A" required />
                                <label for="gradeA" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    A
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeBplus" hidden="hidden" value="B+" />
                                <label for="gradeBplus" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    B+
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeB" hidden="hidden" value="B" />
                                <label for="gradeB" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    B
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeCplus" hidden="hidden" value="C+" />
                                <label for="gradeCplus" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    C+
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeC" hidden="hidden" value="C" />
                                <label for="gradeC" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    C
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeDplus" hidden="hidden" value="D+" />
                                <label for="gradeDplus" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    D+
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeD" hidden="hidden" value="D" />
                                <label for="gradeD" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    D
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="gradeReceive" type="radio" id="gradeF" hidden="hidden" value="F" />
                                <label for="gradeF" class="cursor-pointer rounded-full flex justify-center items-center text-lg lg:text-xl font-semibold w-6 h-10 lg:w-12 lg:h-12">
                                    F
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="grid grid-cols-5 grid-rows-3 gap-y-2 w-5/6 md:w-2/3 lg:w-3/5 mx-auto mb-10">
                        <div class="flex items-center text-lg font-semibold hidden">
                            Subject:
                        </div>
                        <div class="flex hidden col-span-4">
                            <input type="text" name="subjectid" id="subject_id" value="6072fd58257d8c39fcf0d913" disabled placeholder="Section No." class=" bg-yellow-400 bg-opacity-5 border-yellow-500 border focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-300 block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold col-span-2 lg:col-span-1">
                            Section:
                        </div>
                        <div class="flex col-span-3 lg:col-span-4 pl-1 sm:pl-0">
                            <input type="text" name="sectionNo" id="section_No" placeholder="Section No." value={data.section} onChange={(event) => { setData({ section: event.target.value }) }} class=" bg-yellow-400 bg-opacity-5 border-yellow-500 border focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-300 block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                            <div class="flex items-end pl-1 text-sm text-gray-400">
                                (Optional)
                            </div>
                        </div>
                        <div class="flex items-center text-lg font-semibold col-span-2 lg:col-span-1">
                            Academic year:
                        </div>
                        <div class="flex col-span-3 lg:col-span-4 pl-1 sm:pl-0">
                            <input type="number" name="academicyear" id="academic_year" placeholder="" value={data.academic_year} onChange={(event) => { setData({ academic_year: event.target.value }) }} disabled class=" bg-gray-50 bg-opacity-100 border-gray-300 border block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold col-span-2 lg:col-span-1">
                            Semester:
                        </div>
                        <div class="flex col-span-3 lg:col-span-4 pl-1 sm:pl-0">
                            <input type="number" name="semester" id="Semester" value={data.semester} onChange={(event) => { setData({ semester: event.target.value }) }} placeholder="" disabled class=" bg-gray-50 bg-opacity-100 border-gray-300 border block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold hidden">
                            ID:
                        </div>
                        <div class="flex hidden col-span-4">
                            <input type="text" name="studentId" id="student_Id" value={data.reviewer} placeholder="" disabled class=" bg-gray-50 bg-opacity-100 border-gray-300 border block text-sm py-3 px-6 rounded-full w-48 outline-none" />
                        </div>
                    </div>
                </div>

                <div class="flex justify-start w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <div class="text-lg font-semibold">
                        Feeling about this course
                    </div>
                </div>
                <div class="flex flex-wrap mb-2 justify-center mt-6">
                    <div class="relative w-5/6 md:w-2/3 lg:w-3/5 appearance-none label-floating mx-auto">
                        <textarea class="pt-3 pb-32 px-6 autoexpand tracking-wide mb-3 leading-relaxed appearance-none block w-full bg-yellow-400 bg-opacity-5 border-yellow-500 border rounded-2xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-300"
                            id="message" name="reviewContent" type="text" value={data.review_detail} onChange={(event) => { setData({ review_detail: event.target.value }) }} placeholder="Message..." ></textarea>
                        <label for="message" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Message...
                        </label>
                    </div>
                </div>
                <div class="text-center w-5/6 md:w-2/3 lg:w-3/5 mx-auto flex justify-start">
                    <p>If you can't think of something that will be written We provide advice on topics</p>
                </div>
                <div class="text-center w-5/6 md:w-2/3 lg:w-3/5 mx-auto flex justify-start mb-10">
                    <p>such as the content of lessons, teaching style, activities to do, tasks, quizzes, exams.</p>
                </div>

                <div class="flex grid grid-cols-5 w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <div class="flex items-center text-lg font-semibold col-span-5 sm:col-span-2">
                        Teaching:
                        <div class="flex items-center font-bold text-xl text-red-500 pb-5 pl-4">*</div>
                    </div>
                    <div class="max-w-screen-xl mt-2 sm:mt-10 mb-6 sm:mb-10 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5 col-span-2 justify-self-start">
                        <div class="flex w-full relative space-x-1">
                            <div class="inline-block radio">
                                <input name="scoreTeaching" type="radio" id="teachmethod1" value="1" required />
                                <label for="teachmethod1" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    1
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreTeaching" type="radio" id="teachmethod2" hidden="hidden" value="2" />
                                <label for="teachmethod2" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    2
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreTeaching" type="radio" id="teachmethod3" hidden="hidden" value="3" />
                                <label for="teachmethod3" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    3
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreTeaching" type="radio" id="teachmethod4" hidden="hidden" value="4" />
                                <label for="teachmethod4" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    4
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreTeaching" type="radio" id="teachmethod5" hidden="hidden" value="5" />
                                <label for="teachmethod5" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex grid grid-cols-5 w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <div class="flex items-center text-lg font-semibold col-span-5 sm:col-span-2">
                        Bringing knowledge to use:
                        <div class="flex items-center font-bold text-xl text-red-500 pb-5 pl-4">*</div>
                    </div>
                    <div class="max-w-screen-xl flex mt-2 sm:mt-0 mb-6 sm:mb-0 flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5 col-span-2 justify-self-start">
                        <div class="flex w-full relative space-x-1">
                            <div class="inline-block radio">
                                <input name="scoreKnowledge" type="radio" id="knowledgemethod1" value="1" required />
                                <label for="knowledgemethod1" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    1
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreKnowledge" type="radio" id="knowledgemethod2" hidden="hidden" value="2" />
                                <label for="knowledgemethod2" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    2
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreKnowledge" type="radio" id="knowledgemethod3" hidden="hidden" value="3" />
                                <label for="knowledgemethod3" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    3
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreKnowledge" type="radio" id="knowledgemethod4" hidden="hidden" value="4" />
                                <label for="knowledgemethod4" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    4
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreKnowledge" type="radio" id="knowledgemethod5" hidden="hidden" value="5" />
                                <label for="knowledgemethod5" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex grid grid-cols-5 w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <div class="flex items-center text-lg font-semibold col-span-5 sm:col-span-2">
                        Participation in class:
                        <div class="flex items-center font-bold text-xl text-red-500 pb-5 pl-4">*</div>
                    </div>
                    <div class="max-w-screen-xl mt-2 sm:mt-10 mb-10 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5 col-span-2 justify-self-start">
                        <div class="flex w-full relative space-x-1">
                            <div class="inline-block radio">
                                <input name="scoreParticipation" type="radio" id="participate1" value="1" required />
                                <label for="participate1" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    1
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreParticipation" type="radio" id="participate2" hidden="hidden" value="2" />
                                <label for="participate2" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    2
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreParticipation" type="radio" id="participate3" hidden="hidden" value="3" />
                                <label for="participate3" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    3
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreParticipation" type="radio" id="participate4" hidden="hidden" value="4" />
                                <label for="participate4" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    4
                                </label>
                            </div>
                            <div class="inline-block radio">
                                <input name="scoreParticipation" type="radio" id="participate5" hidden="hidden" value="5" />
                                <label for="participate5" class="cursor-pointer px-0 py-0 rounded-full flex justify-center items-center text-xl font-semibold w-10 h-10 lg:w-12 lg:h-12">
                                    5
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-10 mb-8 text-red-500 font-semibold text-md w-5/6 md:w-2/3 lg:w-3/5 mx-auto">
                    <p class="mb-2 font-bold text-lg">
                        <div class="">
                            Read before Post:
                        </div>
                    </p>
                    <p class="">
                        All of these information is true and no vulgar words.
                    </p>
                </div>

                <div class="pt-14">
                    <div>
                        <div class="flex items-center justify-center">
                            <button type="submit" className="submit-button" class="cursor-pointer py-3 px-12 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300" >POST</button>
                        </div>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 300,
                            }}
                        >
                            <Fade in={open}>
                                <div class="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 rounded-lg shadow-lg">
                                    <div class="bg-green-50 py-20 flex justify-center rounded-lg">
                                        <svg
                                            class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M0 0h24v24H0z" stroke="none" />
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                        <div class="text-green-700">
                                            <div class="font-bold text-xl">Your review has been posted!</div>
                                            <div>You can view your posts on the main page and history page.</div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </Modal>
                    </div>
                    <div class="bg-gradient-to-t from-yellow-200 h-14 mt-14">
                    </div>
                </div>

            </form>
        </div>
    );
}

export default EditPage;