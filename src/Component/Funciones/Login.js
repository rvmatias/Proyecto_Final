

export default function (props) {
    return (
        <div className="Background-image">
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Ingresar en tu cuenta</h3>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Ingresar
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">   <a href="www.google.com">¿Olvidaste tu contraseña?</a></p>
                </div>
            </form>
        </div>
        </div>
    )
}
