import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer';
import TopicHome from './TopicHome';
// import IMAGES from './IMAGES.js';
import ReturntotopButton from './ReturntotopButton.js';
import PostBox from './PostBox.js';

function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <Banner />
            {/* <ReturntotopButton /> */}
            <TopicHome />
            <PostBox />
            <Footer />
        </div>
    );
}

export default HomePage;