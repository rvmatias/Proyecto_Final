import Navbar from "../Component/Navbar";
import HomeBody from "../Component/HomeBody";
import Footer from "../Component/Footer";
import PlayList from "../Component/PlayList";

function HomePage () {
    return(
        <div>
            <Navbar/>
            <HomeBody/>
            <PlayList/>
            <Footer/>
        </div>
    );
}

export default HomePage;