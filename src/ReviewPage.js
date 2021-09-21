import Navbar from "./Navbar";
import ReturntotopButton from "./ReturntotopButton";
import FooterReview from "./FooterReview";
import SearchBanner from "./SearchBanner";
import SubjectNameTop from "./SubjectNameTop";
import { useState } from 'react';
import axios from 'axios';

import SelectRadio from '../src/styles/SelectRadio.css';

function ReviewPage() {

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

        const review = {
            grade_received: grade_received,
            teacher_rating: teacher_rating,
            usefulness_rating: usefulness_rating,
            participation_rating: participation_rating,
            academic_year: academic_year,
            semester: semester,
            reviewer: student_id,
            reviewedSubject: subject_id,
            active: true,
            review_detail: review_detail,
            section: section
        }
        return review;

    }

    const [allStudentReview, setAllStudentReview] = useState([]);

    function onReviewSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:5000/api/reviews', getValue())
            .then(res => console.log.res.data)
            .catch(err => console.log(err.message));

        setAllStudentReview((prevAllStudentReview) => {
            return [...prevAllStudentReview, getValue];
        });

        window.location = '/';
    }



    return (
        <div className="ReviewPage">
            <Navbar />
            <SearchBanner />
            {/* <ReturntotopButton /> */}

            <div class="flex justify-center pt-40 pr-96">
                <div class="flex items-center mr-20">
                    <div>
                        <div class="font-bold text-xl bg-yellow-500 bg-opacity-20 text-black rounded-full px-7 py-4 flex items-center justify-center">
                            GEN&nbsp;201
                        </div>
                    </div>
                    <div class="rounded-l-full w-full pl-8 text-black">
                        <p class="text-lg font-bold">Art and Science of Cooking and Eating</p>
                        <p class="text-md text-gray-black">(ศาสตร์และศิลย์ของการทำและรับประทานอาหาร)</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onReviewSubmit}  >

                <div class="mt-16 flex justify-center">
                    <span class="flex font-bold text-lg items-center mr-96">
                        Write review of this course
                    </span>
                    <div class="flex items-center justify-center ml-60">
                        <a href="#" class="py-3 px-8 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Clear</a>
                    </div>
                </div>

                <div class="flex justify-center mr-56">
                    <div class="flex items-center text-lg font-semibold" >
                        Grade:
                    </div>
                    <div class=" max-w-screen-xl mt-10 mb-10 mx-10 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5">
                        <div class="flex w-full relative">
                            <input type="radio" id="gradeA" value="A" name="gradeReceive" class="appearance-none" />
                            <label for="gradeA" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">A</label>

                            <input type="radio" id="gradeBplus" value="B+" name="gradeReceive" class="appearance-none" />
                            <label for="gradeBplus" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">B+</label>

                            <input type="radio" id="gradeB" value="B" name="gradeReceive" class="appearance-none" />
                            <label for="gradeB" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">B</label>

                            <input type="radio" id="gradeCplus" value="C+" name="gradeReceive" class="appearance-none" />
                            <label for="gradeCplus" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">C+</label>

                            <input type="radio" id="gradeC" value="C" name="gradeReceive" class="appearance-none" />
                            <label for="gradeC" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">C</label>

                            <input type="radio" id="gradeDplus" value="D+" name="gradeReceive" class="appearance-none" />
                            <label for="gradeDplus" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">D+</label>

                            <input type="radio" id="gradeD" value="D" name="gradeReceive" class="appearance-none" />
                            <label for="gradeD" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">D</label>

                            <input type="radio" id="gradeF" value="F" name="gradeReceive" class="appearance-none" />
                            <label for="gradeF" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">F</label>

                            <div class="w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-yellow-100 border-2 border-yellow-400 absolute transform transition-transform tabAnim"></div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mr-96">
                    <div class="grid grid-cols-2 grid-rows-5 gap-1 gap-y-2 gap-x-10 mr-16">
                        <div class="flex items-center text-lg font-semibold">
                            Subject:
                        </div>
                        <div class="flex">
                            <input type="text" name="subjectid" id="subject_id" value="6072fd58257d8c39fcf0d913" disabled placeholder="Section No." class=" bg-yellow-400 bg-opacity-5 border-yellow-500 border focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-300 block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold">
                            Section:
                        </div>
                        <div class="flex">
                            <input type="text" name="sectionNo" id="section_No" placeholder="Section No." class=" bg-yellow-400 bg-opacity-5 border-yellow-500 border focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-300 block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold">
                            Academic year:
                        </div>
                        <div class="flex">
                            <input type="number" name="academicyear" id="academic_year" value="2021" placeholder="" disabled class=" bg-gray-50 bg-opacity-100 border-gray-300 border block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold">
                            Semester:
                        </div>
                        <div class="flex">
                            <input type="number" name="semester" id="Semester" value="1" placeholder="" disabled class=" bg-gray-50 bg-opacity-100 border-gray-300 border block text-sm py-3 px-6 rounded-full w-32 outline-none" />
                        </div>
                        <div class="flex items-center text-lg font-semibold">
                            ID:
                        </div>
                        <div class="flex">
                            <input type="text" name="studentId" id="student_Id" value="6124839e65cfb652d8df2b67" placeholder="" disabled class=" bg-gray-50 bg-opacity-100 border-gray-300 border block text-sm py-3 px-6 rounded-full w-48 outline-none" />
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mr-96 mt-10">
                    <div class="mr-72 text-lg font-semibold">
                        Feeling about this course
                    </div>
                </div>
                <div class="flex flex-wrap mb-2 justify-center mt-6">
                    <div class="relative w-3/5 appearance-none label-floating mx-80">
                        <textarea class="pt-3 pb-32 px-6 autoexpand tracking-wide mb-3 leading-relaxed appearance-none block w-full bg-yellow-400 bg-opacity-5 border-yellow-500 border rounded-2xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-300"
                            id="message" name="reviewContent" type="text" placeholder="Message..."></textarea>
                        <label for="message" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Message...
                        </label>
                    </div>
                </div>
                <div class="text-center mr-80">
                    <p>If you can't think of something that will be written We provide advice on topics</p>
                </div>
                <div class="text-center mr-72 mb-10">
                    <p>such as the content of lessons, teaching style, activities to do, tasks, quizzes, exams.</p>
                </div>

                <div class="flex justify-center mr-60">
                    <div class="flex items-center text-lg font-semibold mr-40">
                        Teaching:
                    </div>
                    <div class="max-w-screen-xl mt-10 mb-10 mx-11 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5">
                        <div class="flex w-full relative">
                            <input type="radio" id="teachmethod1" value="1" name="scoreTeaching" class="appearance-none" />
                            <label for="teachmethod1" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">1</label>

                            <input type="radio" id="teachmethod2" value="2" name="scoreTeaching" class="appearance-none" />
                            <label for="teachmethod2" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">2</label>

                            <input type="radio" id="teachmethod3" value="3" name="scoreTeaching" class="appearance-none" />
                            <label for="teachmethod3" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">3</label>

                            <input type="radio" id="teachmethod4" value="4" name="scoreTeaching" class="appearance-none" />
                            <label for="teachmethod4" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">4</label>

                            <input type="radio" id="teachmethod5" value="5" name="scoreTeaching" class="appearance-none" />
                            <label for="teachmethod5" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">5</label>

                            <div class="w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-yellow-100 border-2 border-yellow-400 absolute transform transition-transform tabAnim"></div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mr-60">
                    <div class="flex items-center text-lg font-semibold mr-3">
                        Bringing knowledge to use:
                    </div>
                    <div class="max-w-screen-xl mx-11 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5">
                        <div class="flex w-full relative">
                            <input type="radio" id="knowledgemethod1" value="1" name="scoreKnowledge" class="appearance-none" />
                            <label for="knowledgemethod1" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">1</label>

                            <input type="radio" id="knowledgemethod2" value="2" name="scoreKnowledge" class="appearance-none" />
                            <label for="knowledgemethod2" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">2</label>

                            <input type="radio" id="knowledgemethod3" value="3" name="scoreKnowledge" class="appearance-none" />
                            <label for="knowledgemethod3" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">3</label>

                            <input type="radio" id="knowledgemethod4" value="4" name="scoreKnowledge" class="appearance-none" />
                            <label for="knowledgemethod4" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">4</label>

                            <input type="radio" id="knowledgemethod5" value="5" name="scoreKnowledge" class="appearance-none" />
                            <label for="knowledgemethod5" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">5</label>

                            <div class="w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-yellow-100 border-2 border-yellow-400 absolute transform transition-transform tabAnim"></div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mr-60">
                    <div class="flex items-center text-lg font-semibold mr-16">
                        Participation in class:
                    </div>
                    <div class="max-w-screen-xl mt-10 mb-10 mx-11 flex flex-col items-center border rounded-full border-yellow-500 bg-yellow-400 bg-opacity-5">
                        <div class="flex w-full relative">
                            <input type="radio" id="participate1" value="1" name="scoreParticipation" class="appearance-none" />
                            <label for="participate1" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">1</label>

                            <input type="radio" id="participate2" value="2" name="scoreParticipation" class="appearance-none" />
                            <label for="participate2" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">2</label>

                            <input type="radio" id="participate3" value="3" name="scoreParticipation" class="appearance-none" />
                            <label for="participate3" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">3</label>

                            <input type="radio" id="participate4" value="4" name="scoreParticipation" class="appearance-none" />
                            <label for="participate4" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">4</label>

                            <input type="radio" id="participate5" value="5" name="scoreParticipation" class="appearance-none" />
                            <label for="participate5" class="cursor-pointer w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full py-2">5</label>

                            <div class="w-16 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-0 h-full bg-yellow-100 border-2 border-yellow-400 absolute transform transition-transform tabAnim"></div>
                        </div>
                    </div>
                </div>

                <div class="pt-14">
                    <div class="flex items-center justify-center">
                        <button type="submit" className="submit-button" class="cursor-pointer py-3 px-12 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300" onClick={getValue} >POST</button>
                    </div>
                    <div class="bg-gradient-to-t from-yellow-200 h-14 mt-14">
                    </div>
                </div>

            </form>


        </div>
    );

}

export default ReviewPage;