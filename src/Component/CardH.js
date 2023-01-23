import Paez from "../Img/Paez.jpg"

function CardH() {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Paez} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">FITO PAEZ VUELVE A VELEZ SÁBADO 01 DE ABRIL – 2023</h5>
                        <p className="card-text">Hoy, en el marco de la celebración de los 30 años de El Amor después del amor, se agotaron las entradas para 8 shows en el Movistar Arena de Buenos Aires, 3 en el Anfiteatro Municipal de Rosario, 2 en la Plaza de la Música de Córdoba, conciertos a pleno en el mítico Radio City Music Hall de New York, Orlando, Miami (agotado), Madrid y Barcelona (agotados), Venezuela, Montevideo (agotados) y Santiago de Chile (agotados).</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardH;