import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="nav-link active" to ="/home">logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="www.google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/events">Eventos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/contacto">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ingresar">Ingresar/Registrarse</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
};

export default Navbar;