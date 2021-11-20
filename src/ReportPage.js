import FooterEmpty from "./FooterEmpty";
import Navbar from "./Navbar";
import Scroll from "./ReturntotopButton";
import SubjectReportList from "./SubjectReportList";

function ReportPage() {
    return (
        <div>
            <Navbar />
            <Scroll showBelow={250} />
            <div class="flex pl-8 sm:pl-0 pt-28 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/3">
                <a href="/subject" class="flex items-center cursor-pointer transition space-x-2 duration-100 text-gray-400 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-md font-semibold">
                        Back
                    </p>
                </a>
            </div>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-0 sm:mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/3">
                <SubjectReportList />
                <SubjectReportList />
                <SubjectReportList />
                <SubjectReportList />
                <SubjectReportList />
            </div>
            <FooterEmpty />
        </div>
    );
}

export default ReportPage;