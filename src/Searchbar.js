function Searchbar() {
    return (
        <div class="flex justify-center">
            <div class="pt-10 w-1/3">
                <div class="bg-white flex items-center rounded-full shadow-lg">
                    <input class="rounded-l-full w-full py-4 pl-8 text-gray-600 leading-tight focus:outline-none placeholder-gray-600 focus:placeholder-gray-400" type="text" placeholder="Search for a course code or name"></input>
                    <div class="p-2">
                        <button class="font-semibold bg-yellow-500 text-white rounded-full px-5 py-3 hover:bg-yellow-600 focus:outline-none flex items-center justify-center active:bg-yellow-600 transition duration-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;