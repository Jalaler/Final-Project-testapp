import AppHeader from './AppHeader';
import React from "react";
import SearchBar from './SearchBar';
import SearchbarReview from '../Style/SearchbarReview.css';
import OpenMessageReview from '../Style/OpenMessageReview.css';
import WriteReview from '../Style/WriteReview.css';
import { useState } from 'react';
import axios from 'axios';


function PageReview() {

    // States
    const [studentReview, setStudentReview] = useState({
        gradeReceive: '',
        sectionNo: '',
        teacherName: '',
        reviewContent: '',
        scoreTeaching: '',
        scoreKnowledge: '',
        rateSubject: ''
    });

    const [allStudentReview, setAllStudentReview] = useState([]);

    // Functions
    function onNoteValueChange(event) {
        const { name, value } = event.target;
        setStudentReview((prevStudentReview) => {
            return {
                ...prevStudentReview,
                [name]: value
            }
        })
    }

    function onReviewSubmit(event) {
        event.preventDefault();

        const review = {
            grade_received: this.state.gradeReceive,
            scetion: this.state.sectionNo,
            teacher_id: this.state.teacherName,
            review_detail: this.state.reviewContent,
            teacher_rating: this.state.scoreTeaching,
            usefulness_rating: this.state.scoreKnowledge,
            subject_rating: this.state.rateSubject
        }

        console.log(studentReview);

        axios.post('http://localhost:3000/review', studentReview)
        .then(res => console.log.res.data);

        setAllStudentReview((prevAllStudentReview) => {
            return [...prevAllStudentReview, studentReview];
        });

        window.location = '/';
    }

    // Element
    const ReviewElement = allStudentReview.map((theReview, index) => {          // ไอไปใส่ใต้ form แต่มันเอ๋อ ดูได้ข้างล่าง
        return (
            <div key={index} className="content">
                {theReview.gradeReceive}                    {/*input ที่เป็น radio รับค่าไม่ได้อ่ะ ลอง console log ได้แค่ text*/}
                {theReview.sectionNo}
                {theReview.teacherName}
                {theReview.reviewContent}
                {theReview.scoreTeaching}
                {theReview.scoreKnowledge}
                {theReview.rateSubject}
            </div>
        )
    })

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
                        <input type="radio" id="gradeA" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeA">A</label>

                        <input type="radio" id="gradeB+" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeB+">B+</label>

                        <input type="radio" id="gradeB" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeB">B</label>

                        <input type="radio" id="gradeC+" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeC+">C+</label>

                        <input type="radio" id="gradeC" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeC">C</label>

                        <input type="radio" id="gradeD+" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeD+">D+</label>

                        <input type="radio" id="gradeD" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
                        <label for="gradeD">D</label>

                        <input type="radio" id="gradeF" name="gradeReceive" value={studentReview.gradeReceive} onChange={onNoteValueChange}></input>
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
                                name="sectionNo" value={studentReview.sectionNo} onChange={onNoteValueChange}></input>
                        </div>
                        <div className="text-teacher">
                            Teacher
                    </div>
                        <div className="input-section">
                            <input type="text" className="box-input-teacher" placeholder="teacher name"
                                name="teacherName" value={studentReview.teacherName} onChange={onNoteValueChange}></input>
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
                                name="reviewContent" value={studentReview.reviewContent} onChange={onNoteValueChange} />
                        </div>
                        <div className="big-review-description">
                            <div className="d1">If you can't think of something that will be written We provide advice on topics</div>
                            <div className="d2">such as the content of lessons, teaching style, activities to do, tasks, quizzes, exams.</div>
                        </div>
                    </div>

                    <div className="score-review">
                        {/* <div className="number-of-task">
                        Number of task
                    </div>
                    <div className="radio-grade">
                        <input type="radio" id="numTask1" name="numTask" value="numTask1"></input>
                        <label for="numTask1">1</label>
                    </div>
                    <div className="radio-grade">
                        <input type="radio" id="numTask2" name="numTask" value="numTask2"></input>
                        <label for="numTask2">2</label>
                    </div>
                    <div className="radio-grade">
                        <input type="radio" id="numTask3" name="numTask" value="numTask3"></input>
                        <label for="numTask3">3</label>
                    </div>
                    <div className="radio-grade">
                        <input type="radio" id="numTask4" name="numTask" value="numTask4"></input>
                        <label for="numTask4">4</label>
                    </div>
                    <div className="radio-grade">
                        <input type="radio" id="numTask5" name="numTask" value="numTask5"></input>
                        <label for="numTask5">5</label>
                    </div> */}

                        <div className="teaching-method">
                            Teaching method
                    </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method1" name="scoreTeaching" value={studentReview.scoreTeaching} onChange={onNoteValueChange}></input>
                            <label for="teach-method1">1</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method2" name="scoreTeaching" value={studentReview.scoreTeaching} onChange={onNoteValueChange}></input>
                            <label for="teach-method2">2</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method3" name="scoreTeaching" value={studentReview.scoreTeaching} onChange={onNoteValueChange}></input>
                            <label for="teach-method3">3</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method4" name="scoreTeaching" value={studentReview.scoreTeaching} onChange={onNoteValueChange}></input>
                            <label for="teach-method4">4</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="teach-method5" name="scoreTeaching" value={studentReview.scoreTeaching} onChange={onNoteValueChange}></input>
                            <label for="teach-method5">5</label>
                        </div>

                        <div className="bringing-knowledge-to-practical-use">
                            Bringing knowledge to practical use
                    </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use1" name="scoreKnowledge" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="prac-use1">1</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use2" name="scoreKnowledge" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="prac-use2">2</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use3" name="scoreKnowledge" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="prac-use3">3</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use4" name="scoreKnowledge" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="prac-use4">4</label>
                        </div>
                        <div className="radio-grade">
                            <input type="radio" id="prac-use5" name="scoreKnowledge" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="prac-use5">5</label>
                        </div>

                        <div className="rate-this-subject">
                            <b>RATE THIS SUBJECT</b>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject1" name="rateSubject" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="rate-subject1">1</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject2" name="rateSubject" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="rate-subject2">2</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject3" name="rateSubject" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="rate-subject3">3</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject4" name="rateSubject" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="rate-subject4">4</label>
                        </div>
                        <div className="radio-rate">
                            <input type="radio" id="rate-subject5" name="rateSubject" value={studentReview.scoreKnowledge} onChange={onNoteValueChange}></input>
                            <label for="rate-subject5">5</label>
                        </div>
                    </div>

                </div>

                <div className="submit-review">
                    <button type="submit" className="submit-button" >Submit review!</button>
                </div>

            </form>

            {/* <div className="content">           {/*เอ๋อ*
                {ReviewElement}
            </div> */}

        </div>

    );
}

export default PageReview;