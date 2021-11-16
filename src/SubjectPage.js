import FooterEmpty from "./FooterEmpty";
import Navbar from "./Navbar";
import Scroll from './ReturntotopButton.js';
import SearchBanner from "./SearchBanner";
import SubjectListType1 from "./SubjectListType1";
import SubjectListType2 from "./SubjectListType2";

function SubjectPage() {
    return (
        <div className="SubjectPage" class="flex flex-col h-screen">
            <Navbar />
            <SearchBanner />
            <Scroll showBelow={250} />
            <main class="flex-grow">
                <div class="font-bold text-2xl lg:text-3xl pt-36 md:pt-40 pb-4 md:pb-8 flex justify-start md:justify-center w-1/2 ml-10 sm:ml-20 md:ml-0">
                    Subject
                </div>
                <SubjectListType1 />
            </main>
            <footer>
                <FooterEmpty />
            </footer>
        </div>
    );
}

export default SubjectPage;