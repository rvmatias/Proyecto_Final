
import { Link } from "react-router-dom";

function register () {
    return (
        <div className="Background-image">
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Crear cuenta</h3>
                    <p>¿Ya tienes una cuenta? <Link to ="/ingresar">Ingresa aquí</Link></p>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email" className="form-control mt-1" placeholder="Email" id="usuario"/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control mt-1" placeholder="Contraseña" id="contraseña"/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary"> Registrarme </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
};

export default register;