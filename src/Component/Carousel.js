

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
                    <img src="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/wos960.png" className="d-block w-100" alt="./Img/reyes1.jpg" />
                </div>
                <div className="carousel-item">
                    <img src="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/divi960.png" className="d-block w-100" alt="./Img/reyes2.jpg" />
                </div>
                <div className="carousel-item">
                    <img src="https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/960x400_ticketek.png" className="d-block w-100" alt="./Img/reyes3.jpg" />
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