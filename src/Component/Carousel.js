

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://recursos-webexport.s3.amazonaws.com/Weyop/MARCANTONIO%20DEPORTES/Store/Slider/1657640075_R2FybWlu.webp" className="d-block w-100" alt="./Img/reyes1.jpg" />
                </div>
                <div className="carousel-item">
                    <img src="https://recursos-webexport.s3.amazonaws.com/Weyop/MARCANTONIO%20DEPORTES/Store/Slider/1657640154_QSBOYXRpb24%3D.webp" className="d-block w-100" alt="./Img/reyes2.jpg" />
                </div>
                <div className="carousel-item">
                    <img src="https://recursos-webexport.s3.amazonaws.com/Weyop/MARCANTONIO%20DEPORTES/Store/Slider/1669132119_YmxhY2sgZnJpZGF5IC0gMyBDdW90YXM%3D.webp" className="d-block w-100" alt="./Img/reyes3.jpg" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;