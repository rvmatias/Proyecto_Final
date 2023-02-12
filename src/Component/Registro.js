import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../../src/Service/ApiCall";

    const Registro = () => {
        const [formValues, setFormValues] = useState({
            email: "",
            password: "",
            firstname: "",
        });
    
        const handleChange = (event) => {
            setFormValues({
                ...formValues,
                [event.target.name]: event.target.value,
            });
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const saveUser = () => {
                register(formValues)
                    .then(() => {
                        alert("Registrado correctamente");
                    })
                    .catch((error) => alert("Error al registrar"));
            };
            saveUser();
        };


    return (
        <div className="Background-image">
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Crear cuenta</h3>
                    <p>¿Ya tienes una cuenta? <Link to ="/ingresar">Ingresa aquí</Link></p>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email" className="form-control mt-1" placeholder="example@gmail.com" id="email" name="email" value={formValues.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control mt-1" placeholder="Contraseña" id="password" name="password" value={formValues.password} onChange={handleChange}/>
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

export default Registro;