function Footer(props) {

    // if(props.URL == undefined){
    //     props.URL = 'GEN111'
    // }

    return (
        <div class="pt-20">
            <div class="flex items-center justify-center">
                <span class="font-semibold text-lg">No more reviews</span>
            </div>
            <div class="flex items-center justify-center mt-8">
                <a href={"/review/" + props.URL} class="py-4 px-8 font-semibold text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Write Review!</a>
            </div>
            <div class="bg-gradient-to-t from-yellow-200 h-14 mt-14">
            </div>
        </div>
    );
}

export default Footer;