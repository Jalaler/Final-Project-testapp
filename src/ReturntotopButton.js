// import IMAGES from "./IMAGES";
import ReturnToTopBtn from "../src/styles/ReturnToTopBtn.css";

function ReturntotopButton() {

    // var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
    // var rootElement = document.documentElement
    // function handleScroll() {
    //     // Do something on scroll
    //     var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    //     if ((rootElement.scrollTop / scrollTotal) > 0.80) {
    //         // Show button
    //         scrollToTopBtn.classList.add("showBtn")
    //     } else {
    //         // Hide button
    //         scrollToTopBtn.classList.remove("showBtn")
    //     }
    // }
    // function scrollToTop() {
    //     // Scroll to top logic
    //     rootElement.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }
    // scrollToTopBtn.addEventListener("click", scrollToTop)
    // document.addEventListener("scroll", handleScroll)


    return (
        <button class="scrollToTopBtn">
            <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
        </ button>
    );

}

export default ReturntotopButton;