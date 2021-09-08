import IMAGES from './IMAGES.js';
import Searchbar from './Searchbar.js';

function Banner() {
    return (
        <div>
            <img src={IMAGES.Orange1} class="absolute z-40 w-44 pt-10" />
            <img src={IMAGES.Orange2} class="absolute z-40 w-40 pt-96 right-0" />
            <div class="absolute z-40 w-20 pt-96">
                <img src={IMAGES.BigAnt} class="pt-60 ml-72" />
            </div>
            <div class="absolute z-40 w-20 pt-96 mr-96 right-0">
                <img src={IMAGES.SmallAnt} class="pt-72" />
            </div>
            <div class="absolute z-40 w-20 pt-96 mr-72 right-0">
                <img src={IMAGES.SmallAnt} class="pt-72" />
            </div>
            <div class="bg-no-repeat bg-top bg-cover h-full w-full z-0">
                <img src={IMAGES.BannerBackground} class="opacity-100 absolute mt-4" />
            </div>
            <div class="pt-44 z-40 relative">
                <div class="text-center">
                    <p class="text-6xl font-bold">
                        Success is driven by
                    </p>
                    <div class="pt-3">
                        <span class="text-6xl font-bold">
                            the&nbsp;
                        </span>
                        <span class="text-6xl font-bold text-yellow-500">
                            Power of Knowledge
                        </span>
                    </div>
                </div>
                <div class="pt-20 pb-10 text-center">
                    <p class="text-lg font-medium">
                        This shared information is an experience of studying various subjects in
                    </p>
                    <p class="text-lg font-medium">
                        King Mongkut's University of Technology Thonburi
                    </p>
                </div>
                <Searchbar />
                <div class="flex pl-6 relative">
                    <div class="transform rotate-90">
                        <div class="transform rotate-180 font-semibold text-gray-400">
                            Scroll down
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce absolute ml-8 mt-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Banner;