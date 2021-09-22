import IMAGES from "./IMAGES";
import Searchbar from "./Searchbar";


function SearchBanner() {
    

    return (
        <div>
            <div class="absolute z-40 w-20 pt-72 ml-56">
                <img src={IMAGES.SmallAnt} class="pt-3" />
            </div>
            <div class="absolute z-40 w-20 pt-72 ml-32">
                <img src={IMAGES.SmallAnt2} class="pt-4" />
            </div>
            <div class="absolute z-40 w-48 pt-56 right-0 mr-16">
                <img src={IMAGES.Orange3} class="" />
            </div>
            <div class="bg-no-repeat bg-top bg-cover h-full w-full z-0">
                <img src={IMAGES.BannerBackground2} class="opacity-100 absolute mt-14" />
            </div>
            <div class="z-40 relative">
                <div class="pt-36 text-center font-bold text-4xl">
                    Search Subject
                </div>
                <Searchbar  />
            </div>

        </div>
    );
}

export default SearchBanner;