import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider  {...settings}>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./img/foot1.jpg" />
                    </div>
                    <div className="details">
                        <h4>
                            <span className="title--content">Equipe 01</span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./img/foot2.jpg" />
                    </div>
                    <div className="details">
                        <h4>
                            <span className="title--content">Equipe 01</span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./img/foot3.jpg" />
                    </div>
                    <div className="details">
                        <h4>
                            <span className="title--content">Equipe 01</span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./img/foot4.jpg" />
                    </div>
                    <div className="details">
                        <h4>
                            <span className="title--content">Equipe 01</span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./img/foot5.jpg" />
                    </div>
                    <div className="details">
                        <h4>
                            <span className="title--content">Equipe 01</span>
                        </h4>
                    </div>
                </div>
            </div>    

        </Slider>
    )
};

export default ImageSlider;

//... is called spread operator