function TopicHome() {
    return(
        <div class="flex justify-around mt-28 sm:mt-40 md:mt-52 mb-4">
            <div class="flex items-center font-bold text-xl md:text-2xl lg:text-3xl">
                Latest Post
            </div>
            <div class="flex items-center">
                <a href="/Review/:abbr" class="py-4 px-5 md:py-4 md:px-6 lg:py-4 lg:px-8 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Write Review!</a>
            </div>
        </div>
    );
}

export default TopicHome;