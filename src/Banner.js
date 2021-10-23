import IMAGES from './IMAGES.js';
import Searchbar from './Searchbar.js';
import BackgroundBanner from '../src/styles/BackgroundBanner.css';

function Banner() {
    return (
        <div>
            <img src={IMAGES.Orange1} class="absolute z-40 hidden md:block md:w-36 lg:w-44 pt-10" />
            <img src={IMAGES.Orange2} class="absolute z-40 hidden md:block md:w-36 lg:w-40 pt-96 right-0" />
            <div class="absolute z-40 hidden mt-96 md:block md:w-16 lg:w-20 md:ml-36 lg:ml-72">
                <img src={IMAGES.BigAnt} class="md:mt-60 lg:mt-60" />
            </div>
            <div class="absolute z-40 hidden mt-96 right-0 md:block md:w-16 lg:w-20 md:mr-52 lg:mr-96">
                <img src={IMAGES.SmallAnt} class="md:mt-72" />
            </div>
            <div class="absolute z-40 hidden mt-96 right-0 md:block md:w-16 lg:w-20 md:mr-36 lg:mr-72">
                <img src={IMAGES.SmallAnt} class="md:mt-72" />
            </div>
            <div class="relative bg-no-repeat bg-top bg-auto z-0 hidden md:block">
                <img src={IMAGES.BannerBackground} id="backgroundbanner" class="opacity-100 absolute w-full" />
            </div>
            <div class="relative bg-no-repeat bg-top bg-auto z-0 md:hidden">
                <div id="backgroundbanner2" class="bg-yellow-500 opacity-10 absolute w-full">
                </div>
            </div>
            <div class="pt-36 sm:pt-44 z-40 relative">
                <div class="text-center">
                    <p class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold px-4 sm:px-0">
                        Success is driven by
                    </p>
                    <div class="md:pt-3">
                        <span class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
                            the&nbsp;
                        </span>
                        <span class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-yellow-500">
                            Power of Knowledge
                        </span>
                    </div>
                </div>
                <div class="pt-20 pb-10 text-center">
                    <p class="text-md sm:text-md md:text-lg lg:text-lg font-medium px-8 sm:px-0">
                        This shared information is an experience of studying various subjects in
                    </p>
                    <p class="text-md sm:text-md md:text-lg lg:text-lg font-medium px-8 sm:px-0">
                        King Mongkut's University of Technology Thonburi
                    </p>
                </div>
                <Searchbar />
                <div class="flex ml-2 relative invisible sm:visible">
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