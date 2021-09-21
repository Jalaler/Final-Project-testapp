import Footer from "./Footer";
import IMAGES from "./IMAGES";
import Navbar from "./Navbar";
import PostBox from "./PostBox";
import Scroll from './ReturntotopButton.js';

function HistoryPage() {
    return (
        <div className="HistoryPage">
            <Navbar />
            <Scroll showBelow={250} />
            <div class="absolute z-40 w-20 pt-44">
                <img src={IMAGES.BigAnt} class="pt-2 ml-60" />
            </div>
            <div class="absolute z-40 w-20 pt-52 mr-80 right-0">
                <img src={IMAGES.SmallAnt} class="pt-6" />
            </div>
            <div class="absolute z-40 w-20 pt-52 mr-60 right-0">
                <img src={IMAGES.SmallAnt} class="pt-6" />
            </div>
            <div class="bg-no-repeat bg-top bg-cover h-full w-full z-0">
                <img src={IMAGES.BannerBackground3} class="opacity-100 absolute mt-6" />
            </div>
            <div class="z-40 relative">
                <div class="pt-36 text-center font-bold text-4xl">
                    My review history
                </div>
            </div>
            <div class="pt-40">
                <PostBox />
            </div>
            <Footer />
        </div>
    );
}

export default HistoryPage;