
import { Link } from "react-router-dom";


function Card(props) {
    return (
        <>
        <Link to="/event">
        <div className="card text-bg-dark">
            <img src= {props.img} className="card-img" alt="..." />
            <div className="card-img-overlay">
            </div>
        </div>
        </Link>
        </>
    )
}

export default Card;