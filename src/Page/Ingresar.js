import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import LoginPage from "../Component/Funciones/Login";
import "../../src/Css/Login.css"

function Ingresar () {
    return(
        <>
            <Navbar/>
            <LoginPage/>
            <Footer/>
        </>
    );
};


export default Ingresar;