
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Card from "../Component/Card";
import Cards from "../Component/Cards";


function Events() {
    const imgUrl_2="https://www.tuentrada.com/images/63bdbf8a85ef6.webp"
    return (
        <>
            <Navbar />
            <Card img = {imgUrl_2}/>
            <br/>
            <Cards/>
            <br/>
            <Cards/>
            <br/>
            <Cards/>
            <Footer />
        </>
    )
}
export default Events;