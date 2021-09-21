import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Footer from './Footer';
import TopicHome from './TopicHome';
import Scroll from './ReturntotopButton.js';
import PostBox from './PostBox.js';
import LoginModal from './LoginModal.js';

function HomePage() {
    return (
        <div className="HomePage">
            <Navbar />
            <Banner />
            <TopicHome />
            <PostBox />
            <Scroll showBelow={250} />
            <Footer />
        </div>
    );
}

export default HomePage;