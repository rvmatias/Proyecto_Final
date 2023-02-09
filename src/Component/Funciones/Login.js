
import { Link } from "react-router-dom";
import loguear from "../Loguear"

export default function (props) {
    return (
        <div className="Background-image">
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Ingresar en tu cuenta</h3>
                    <p>¿No tienes una cuenta? <Link to ="/registro">Registrate ahora</Link></p>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email" className="form-control mt-1" placeholder="Email" id="usuario"/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control mt-1" placeholder="Contraseña" id="contraseña"/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={loguear}> Ingresar</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
