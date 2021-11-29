import IMAGES from "./IMAGES";
import Navbar from "./Navbar";

function ErrorPage() {
    return (
        <div class="flex flex-col justify-center min-h-screen">
            <div class="hidden">
                <Navbar />
            </div>
            <div class="flex justify-center">
                <img class="w-20 h-20 animate-bounce" src={IMAGES.SmallAnt} />
            </div>
            <div class="flex justify-center mt-12">
                <p class="font-bold text-md text-yellow-500">404 ERROR</p>
            </div>
            <div class="flex justify-center">
                <p class="text-4xl sm:text-5xl font-bold mt-1">Page not found.</p>
            </div>
            <div class="flex justify-center mt-3 mx-10 sm:mx-0">
                <p class="font-semibold text-md sm:text-lg text-gray-400 text-center">Sorry, we couldn't find the page you're looking for.</p>
            </div>
            <button class="flex justify-center mt-10 mb-10">
                <a href="/" class="flex font-semibold text-lg text-white bg-yellow-500 py-2 px-6 rounded-full items-center transition duration-300 transform hover:scale-110 motion-reduce:transform-none hover:bg-yellow-600">Go back home
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </a>
            </button>
        </div>
    );
}

export default ErrorPage;