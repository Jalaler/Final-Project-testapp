import AppHeader from './AppHeader';
import React from "react";
import SearchBar from './SearchBar';
import SearchbarReview from '../Style/SearchbarReview.css';
import OpenMessageReview from '../Style/OpenMessageReview.css';
import WriteReview from '../Style/WriteReview.css';
import { useState } from 'react';
import axios from 'axios';


function PageReview() {

    function getValue() {

        const sectionNo = document.getElementById('sectionNo1').value;
        const teacherName = document.getElementById('teacherName1').value;
        const reviewContent = document.getElementById('reviewContent1').value;
        const scoreTeachingInput = document.getElementsByName('scoreTeaching')
        const gradeReceiveInput = document.getElementsByName('gradeReceive')
        const scoreKnowledgeInput = document.getElementsByName('scoreKnowledge');
        const scoreParticipationInput = document.getElementsByName('scoreParticipation');

        let gradeReceive;
        for (let index = 0; index < gradeReceiveInput.length; index++) {
            if (gradeReceiveInput[index].checked) {
                gradeReceive = gradeReceiveInput[index].value;
                break;
            }
        }

        let scoreTeaching;
        for (let index = 0; index < scoreTeachingInput.length; index++) {
            if (scoreTeachingInput[index].checked) {
                scoreTeaching = scoreTeachingInput[index].value;
                break;
            }
        }

        let scoreKnowledge;
        for (let index = 0; index < scoreKnowledgeInput.length; index++) {
            if (scoreKnowledgeInput[index].checked) {
                scoreKnowledge = scoreKnowledgeInput[index].value;
                break;
            }
        }

        let scoreParticipation;
        for (let index = 0; index < scoreParticipationInput.length; index++) {
            if (scoreParticipationInput[index].checked) {
                scoreParticipation = scoreParticipationInput[index].value;
                break;
            }
        }

        String = gradeReceive + ", " + sectionNo + ", " + teacherName + ", " + reviewContent + ", " +
            scoreTeaching + ", " + scoreKnowledge + ", " + scoreParticipation;
        console.log(String);

    }

    // States
    // const [studentReview, setStudentReview] = useState({
    //     gradeReceive: '',
    //     sectionNo: '',
    //     teacherName: '',
    //     reviewContent: '',
    //     scoreTeaching: '',
    //     scoreKnowledge: '',
    //     scoreParticipation: ''
    //     //rateSubject: ''
    // });

    const [allStudentReview, setAllStudentReview] = useState([]);

    // Functions
    // function onNoteValueChange(event) {
    //     const { name, value } = event.target;
    //     setStudentReview((prevStudentReview) => {
    //         return {
    //             ...prevStudentReview,
    //             [name]: value
    //         }
    //     })
    // }

    function onReviewSubmit(event) {
        event.preventDefault();

        const review = {
            grade_received: this.getValue.gradeReceive,
            section: this.getValue.sectionNo,
            //teacher_id: this.state.teacherName,
            review_detail: this.getValue.reviewContent,
            teacher_rating: this.getValue.scoreTeaching,
            usefulness_rating: this.getValue.scoreKnowledge,
            paticipation_rating: this.getValue.scoreParticipation
            //subject_rating: this.state.rateSubject
        }

        console.log(getValue);

        axios.post('http://localhost:5000/create', review)
            .then(res => console.log.res.data);

        setAllStudentReview((prevAllStudentReview) => {
            return [...prevAllStudentReview, review];
        });

        window.location = '/';
    }


    // Element
    // const ReviewElement = allStudentReview.map((theReview, index) => {          // ไอไปใส่ใต้ form แต่มันเอ๋อ ดูได้ข้างล่าง
    //     return (
    //         <div key={index} className="content">
    //             {theReview.gradeReceive}                    {/*input ที่เป็น radio รับค่าไม่ได้อ่ะ ลอง console log ได้แค่ text*/}
    //             {theReview.sectionNo}
    //             {theReview.teacherName}
    //             {theReview.reviewContent}
    //             {theReview.scoreTeaching}
    //             {theReview.scoreKnowledge}
    //             {theReview.rateSubject}
    //         </div>
    //     )
    // })

    //---------------------------------------------------        ลองทำให้ Radio รับค่าได้
    // let grade=["A", "B+", "B", "C+", "C", "D+", "D", "F"]
    // const [displayGrade, setGrade] = useState('');


    return (

        <div className="PageReview">

            <AppHeader />

            <div className="openmessage-review">
                <b>Subject to Review</b>
            </div>
            <div className="searchbar-review">
                <SearchBar />
            </div>

            <div id="" className="write-review">
                <div className="subjectname-review">
                    <b>Subject: </b> {/*ตามด้วย Subject name*/}
                </div>
                <div className="topic-review">
                    <b>Review this subject!</b>
                </div>
            </div>

            <form onSubmit={onReviewSubmit}>

                <div className="write-review-2">
                    <div className="grade">
                        Grade
                </div>

                    <div className="radio-grade">
                        {/* <input type="radio" id="gradeA" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeA">A</label> */}

                        <input type="radio" id="gradeA" name="gradeReceive" value="A" ></input>
                        <label for="gradeA">A</label>

                        <input type="radio" id="gradeB+" name="gradeReceive" value="B+" ></input>
                        <label for="gradeB+">B+</label>

                        <input type="radio" id="gradeB" name="gradeReceive" value="B" ></input>
                        <label for="gradeB">B</label>

                        <input type="radio" id="gradeC+" name="gradeReceive" value="C+" ></input>
                        <label for="gradeC+">C+</label>

                        <input type="radio" id="gradeC" name="gradeReceive" value="C" ></input>
                        <label for="gradeC">C</label>

                        <input type="radio" id="gradeD+" name="gradeReceive" value="D+" ></input>
                        <label for="gradeD+">D+</label>

                        <input type="radio" id="gradeD" name="gradeReceive" value="D" ></input>
                        <label for="gradeD">D</label>

                        <input type="radio" id="gradeF" name="gradeReceive" value="F" ></input>
                        <label for="gradeF">F</label>

                        {/* {grade.map(resultGrade => (         // ลองไอข้างบนอ่ะ แต่ Radio รับค่าไม่ได้
                    <input type="radio" value={resultGrade} name="gradeReceive" checked={displayGrade===resultGrade} onChange={(e) => setGrade(e.target.value)}></input>
                    )} */}

                    </div>

                    <div className="section-teacher">
                        <div className="text-section">
                            Section
                    </div>
                        <div className="input-section">
                            <input type="text" className="box-input-section" placeholder="section no."
                                id="sectionNo1" name="sectionNo" ></input>
                        </div>
                        <div className="text-teacher">
                            Teacher
                    </div>
                        <div className="input-section">
                            <input type="text" className="box-input-teacher" placeholder="teacher name"
                                id="teacherName1" name="teacherName" ></input>
                        </div>
                    </div>

                    <div className="big-review">
                        <div className="big-review-topic">
                            Write a review
                    </div>
                        {/* <div className="big-review-input">
                        <input type="text" className="box-big-review-input" placeholder="How you feel about the course"></input>
                    </div> */}
                        <div className="big-review-input">
                            <textarea row="16" className="box-big-review-input" placeholder="How you feel about the course"
                                id="reviewContent1" name="reviewContent" />
                        </div>
                        <div className="big-review-description">
                            <div className="d1">If you can't think of something that will be written We provide advice on topics</div>
                            <div className="d2">such as the content of lessons, teaching style, activities to do, tasks, quizzes, exams.</div>
                        </div>
                    </div>

                    <div className="score-review">
                        <div className="teaching-method">
                            Teaching method
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method1" name="scoreTeaching" value="1" ></input>
                            <label for="teach-method1">1</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method2" name="scoreTeaching" value="2" ></input>
                            <label for="teach-method2">2</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method3" name="scoreTeaching" value="3" ></input>
                            <label for="teach-method3">3</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method4" name="scoreTeaching" value="4" ></input>
                            <label for="teach-method4">4</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method5" name="scoreTeaching" value="5" ></input>
                            <label for="teach-method5">5</label>
                        </div>

                        <div className="bringing-knowledge-to-practical-use">
                            Bringing knowledge to practical use
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use1" name="scoreKnowledge" value="1" ></input>
                            <label for="prac-use1">1</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use2" name="scoreKnowledge" value="2" ></input>
                            <label for="prac-use2">2</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use3" name="scoreKnowledge" value="3" ></input>
                            <label for="prac-use3">3</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use4" name="scoreKnowledge" value="4" ></input>
                            <label for="prac-use4">4</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use5" name="scoreKnowledge" value="5" ></input>
                            <label for="prac-use5">5</label>
                        </div>

                        <div className="bringing-knowledge-to-practical-use">
                            Participation in class
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="par-use1" name="scoreParticipation" value="1" ></input>
                            <label for="par-use1">1</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="par-use2" name="scoreParticipation" value="2" ></input>
                            <label for="par-use2">2</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="par-use3" name="scoreParticipation" value="3" ></input>
                            <label for="par-use3">3</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="par-use4" name="scoreParticipation" value="4" ></input>
                            <label for="par-use4">4</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="par-use5" name="scoreParticipation" value="5" ></input>
                            <label for="par-use5">5</label>
                        </div>

                        {/* <div className="rate-this-subject">
                            <b>RATE THIS SUBJECT</b>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject1" name="rateSubject" value="1" onChange={onNoteValueChange}></input>
                            <label for="rate-subject1">1</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject2" name="rateSubject" value="2" onChange={onNoteValueChange}></input>
                            <label for="rate-subject2">2</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject3" name="rateSubject" value="3" onChange={onNoteValueChange}></input>
                            <label for="rate-subject3">3</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject4" name="rateSubject" value="4" onChange={onNoteValueChange}></input>
                            <label for="rate-subject4">4</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject5" name="rateSubject" value="5" onChange={onNoteValueChange}></input>
                            <label for="rate-subject5">5</label>
                        </div> */}
                    </div>

                </div>

                <div className="submit-review">
                    <button type="submit" className="submit-button" onClick={getValue}  >Submit review!</button>
                </div>

            </form>

            {/* <div className="content">           {/*เอ๋อ*
                {ReviewElement}
            </div> */}

        </div>

    );
}

export default PageReview;