
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../Service/ApiCall";


const Login = () => {

    const [formValues, setFormValues] = useState({

        email: "",
        password: "",

    });

    const handleChange = (event) => {
        setFormValues({

            ...formValues,
            [event.target.name]: event.target.value
        })


    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const getUser = () => {
            login(formValues).then(() => {
                alert("Logueado Correctamente");
            })
                .catch((error) => alert("Error al loguear"));
        }
        getUser();
    }
    return (
        <div className="Background-image">
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Ingresar en tu cuenta</h3>
                    <p>¿No tienes una cuenta? <Link to ="/registro">Registrate ahora</Link></p>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email" className="form-control mt-1" placeholder="example@gmail.com" name="email" value={formValues.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control mt-1" placeholder="Contraseña" name="password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary"> Ingresar</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
};

export default Login;
