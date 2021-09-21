import FooterEmpty from "./FooterEmpty";
import Navbar from "./Navbar";
import Scroll from './ReturntotopButton.js';
import SearchBanner from "./SearchBanner";
import SubjectListType1 from "./SubjectListType1";
import SubjectListType2 from "./SubjectListType2";

function SubjectPage() {
    return(
        <div className="SubjectPage">
            <Navbar />
            <SearchBanner />
            <Scroll showBelow={250} />
            <div class="pt-40 px-80 pb-8 font-bold text-3xl">
                Subject
            </div>
            <SubjectListType1 />
            {/* <SubjectListType2 /> */}
            <FooterEmpty />
        </div>
    );
}

export default SubjectPage;