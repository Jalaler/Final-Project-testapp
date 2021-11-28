import IMAGES from "./IMAGES";
import Searchbar from "./Searchbar";
import { useState } from "react";

import BackgroundBanner from "../src/styles/BackgroundBanner.css";


function SearchBanner(props) {
    
    //  const [urlForSeach,setUrlForSeach] = useState('/subject');
    
    return (

        <div>
            <div class="absolute z-40 mt-72 hidden md:block md:w-16 lg:w-20 md:ml-40 lg:ml-56">
                <img src={IMAGES.SmallAnt} class="md:mt-7 lg:mt-3" />
            </div>
            <div class="absolute z-40 mt-72 hidden md:block md:w-16 lg:w-20 md:ml-20 lg:ml-32">
                <img src={IMAGES.SmallAnt2} class="md:mt-7 lg:mt-4" />
            </div>
            <div class="absolute z-40 right-0 hidden md:block md:w-44 lg:w-48 md:mt-60 lg:mt-56 md:mr-12 lg:mr-16">
                <img src={IMAGES.Orange3} class="" />
            </div>
            <div class="relative bg-no-repeat bg-top bg-auto z-0 hidden md:block">
                <img src={IMAGES.BannerBackground2} id="searchbannerbg" class="opacity-100 absolute w-full mt-14" />
            </div>
            <div class="relative bg-no-repeat bg-top bg-auto z-0 md:hidden">
                <div id="searchbannerbg2" class="bg-yellow-500 opacity-10 absolute w-full">
                </div>
            </div>
            <div class="z-40 relative">
                <div class="pt-36 text-center font-bold text-3xl sm:text-3xl lg:text-4xl">
                    Search Subject
                </div>
                <Searchbar urlForSeach={props.urlForSeach} />
            </div>
        </div>
        
    );
}

export default SearchBanner;