import FooterEmpty from "./FooterEmpty";
import IMAGES from "./IMAGES";
import Navbar from "./Navbar";
import ReturntotopButton from "./ReturntotopButton";
import SearchBanner from "./SearchBanner";
import Searchbar from "./Searchbar";
import SubjectListType1 from "./SubjectListType1";
import SubjectListType2 from "./SubjectListType2";

function SubjectPage() {
    return(
        <div className="SubjectPage">
            <Navbar />
            <SearchBanner />
            {/* <ReturntotopButton /> */}
            <div class="pt-40 px-80 pb-8 font-bold text-3xl">
                Subject
            </div>
            <SubjectListType1 />
            <SubjectListType2 />
            <FooterEmpty />
        </div>
    );
}

export default SubjectPage;