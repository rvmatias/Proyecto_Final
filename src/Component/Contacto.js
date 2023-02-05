

function Contacto() {
    return (
            <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contacto</h2>
                <p className="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? Por favor, no dude en ponerse en contacto con nosotros directamente. Nuestro equipo se pondrá en contacto con usted en cuestión de horas para ayudarle.</p>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name"  placeholder="Nombre"  className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                       
                                        <input type="text" id="email" name="email" placeholder="email" className="form-control" />
                                        <br/>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" placeholder="Asunto" className="form-control" />
                                        <br/>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" placeholder="Tu mensaje "className="form-control md-textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}
export default Contacto;