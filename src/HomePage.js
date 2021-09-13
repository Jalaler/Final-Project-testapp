import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer';
import TopicHome from './TopicHome';
import ReturntotopButton from './ReturntotopButton.js';
import PostBox from './PostBox.js';
import LoginModal from './LoginModal.js';

function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <Banner />
            <ReturntotopButton />
            <TopicHome />
            <PostBox />
            <Footer />
            <LoginModal />
        </div>
    );
}

export default HomePage;