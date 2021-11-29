function PostSuccessModal() {
    return (
        <div class="w-2/5 rounded-lg shadow-lg">
            <div class="bg-green-50 pt-20 pb-40 flex justify-center rounded-lg">
                <svg
                    class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
                <div class="text-green-700">
                    <div class="font-bold text-xl">Your review has been posted!</div>
                    <div>You can view your posts on the main page and history page.</div>
                </div>
                <div class="flex items-center justify-center absolute mt-24">
                    <a href="#" class="cursor-pointer py-3 px-12 font-semibold text-white bg-green-600 rounded-full shadow-md hover:bg-green-500 transition duration-300">OK</a>
                </div>
            </div>
        </div>
    );
}

export default PostSuccessModal;

