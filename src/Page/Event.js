
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Card from "../Component/Card";
import Saludo from "../Component/Funciones/Saludo";







function Event() {
    return (
        <>
            <Navbar />
            <Card />
            <Saludo nombre=" Uno de los artistas del momento presenta cuatro funciones en el Templo del Rock. Podrás escuchar todos sus singles además de artistas invitados que irán a los distintos shows." />
            <Footer />
        </>
    )
}
export default Event;