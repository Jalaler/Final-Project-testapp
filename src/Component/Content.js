import '../Style/Content.css';

function Content() {
    return (

        <div className="app-grid">

            <div className="content">
                <div className="subject-id">
                    Subject ID
                    </div>
                <div className="subject-name">
                    Subject Name
                    </div>
                <div className="grade">
                    (Grade)
                    </div>
                <div className="blank">

                </div>
                <div className="detail">
                    <p>Detail...</p>
                </div>
                <div className="class">
                    Teacher
                        <div className="teacher-name">
                        Name
                        </div>
                    <br></br>
                        Section
                        <div className="section">
                        No.
                        </div>
                </div>
                <div className="blank">

                </div>
                <div className="rating">
                    Rating (Star)
                    </div>
                <div className="like-dislike">

                </div>
            </div>

        </div>
    );
}

export default Content;