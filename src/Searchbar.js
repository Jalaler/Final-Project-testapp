function Searchbar() {
    return (
        // <div class="relative flex justify-center pt-10">
        //     <input type="text" placeholder="Search for a course code or name"
        //     class="pl-8 py-4 w-1/3 placeholder-gray-600 focus:placeholder-gray-400 shadow-md rounded-full focus:outline-none focus:ring focus:ring-yellow-200" />
        //     <div class="absolute right-10">
        //         <p>Absolute child</p>
        //     </div>
        // </div>

        <div class="flex justify-center">
            <div class="pt-10 w-1/3">
                <div class="bg-white flex items-center rounded-full shadow-lg">
                    <input class="rounded-l-full w-full py-4 pl-8 text-gray-600 leading-tight focus:outline-none placeholder-gray-600 focus:placeholder-gray-400" type="text" placeholder="Search for a course code or name"></input>
                    <div class="p-2">
                        <button class="font-semibold bg-yellow-500 text-white rounded-full px-5 py-3 hover:bg-yellow-600 focus:outline-none flex items-center justify-center active:bg-yellow-600">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;