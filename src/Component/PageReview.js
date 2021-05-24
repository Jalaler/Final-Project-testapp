import AppHeader from './AppHeader';
import React from "react";
import SearchBar from './SearchBar';
import SearchbarReview from '../Style/SearchbarReview.css';
import OpenMessageReview from '../Style/OpenMessageReview.css';
import WriteReview from '../Style/WriteReview.css';


function PageReview() {
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
                    <b>Subject: </b>SSC123 - Beauty of WORK FROM HOME
                </div>
                <div className="topic-review">
                    <b>Review this subject!</b>
                </div>
            </div>

            <div className="write-review-2">
                <div className="grade">
                    Grade
                </div>
                <div className="grade-button">
                    <input type="button" className="g-btn" value="A"></input>
                    <input type="button" className="g-btn" value="B+"></input>
                    <input type="button" className="g-btn" value="B"></input>
                    <input type="button" className="g-btn" value="C+"></input>
                    <input type="button" className="g-btn" value="C"></input>
                    <input type="button" className="g-btn" value="D+"></input>
                    <input type="button" className="g-btn" value="D"></input>
                    <input type="button" className="g-btn" value="F"></input>
                </div>

                <div className="section-teacher">
                    <div className="text-section">
                        Section
                    </div>
                    <div className="input-section">
                        <input type="text" className="box-input-section" placeholder="section no."></input>
                    </div>
                    <div className="text-teacher">
                        Teacher
                    </div>
                    <div className="input-section">
                        <input type="text" className="box-input-teacher" placeholder="teacher name"></input>
                    </div>
                </div>

                <div className="big-review">
                    <div className="big-review-topic">
                        Write a review
                    </div>
                    <div className="big-review-input">
                        <input type="text" className="box-big-review-input" placeholder="How you feel about the course"></input>
                    </div>
                    {/* <div className="big-review-input">
                        <textarea row="16" className="box-big-review-input" placeholder="How you feel about the course"/>
                    </div> */}
                    <div className="big-review-description">
                        <div className="d1">If you can't think of something that will be written We provide advice on topics</div>
                        <div className="d2">such as the content of lessons, teaching style, activities to do, tasks, quizzes, exams.</div>
                    </div>
                </div>

                <div className="score-review">
                    <div className="number-of-task">
                        Number of task
                    </div>
                    <input type="button" className="s1-btn" value="1"></input>
                    <input type="button" className="s1-btn" value="2"></input>
                    <input type="button" className="s1-btn" value="3"></input>
                    <input type="button" className="s1-btn" value="4"></input>
                    <input type="button" className="s1-btn" value="5"></input>
                    <div className="teaching-method">
                        Teaching method
                    </div>
                    <input type="button" className="s2-btn" value="1"></input>
                    <input type="button" className="s2-btn" value="2"></input>
                    <input type="button" className="s2-btn" value="3"></input>
                    <input type="button" className="s2-btn" value="4"></input>
                    <input type="button" className="s2-btn" value="5"></input>
                    <div className="bringing-knowledge-to-practical-use">
                        Bringing knowledge to practical use
                    </div>
                    <input type="button" className="s3-btn" value="1"></input>
                    <input type="button" className="s3-btn" value="2"></input>
                    <input type="button" className="s3-btn" value="3"></input>
                    <input type="button" className="s3-btn" value="4"></input>
                    <input type="button" className="s3-btn" value="5"></input>
                    <div className="rate-this-subject">
                        <b>RATE THIS SUBJECT</b>
                    </div>
                    <input type="button" className="s4-btn" value="1"></input>
                    <input type="button" className="s4-btn" value="2"></input>
                    <input type="button" className="s4-btn" value="3"></input>
                    <input type="button" className="s4-btn" value="4"></input>
                    <input type="button" className="s4-btn" value="5"></input>
                </div>

            </div>

            <div className="submit-review">
                <a href="#" className="submit-button">Submit this review!</a>
            </div>

        </div>

    );
}

export default PageReview;