
import { Link } from "react-router-dom";
import cataneo from "../Img/cataneo.jpg"

function Card() {
    return (
        <>
        <Link to="/event">
        <div className="card text-bg-dark">
            <img src= {cataneo} className="card-img" alt="..." />
            <div className="card-img-overlay">
            </div>
        </div>
        </Link>
        </>
    )
}

export default Card;