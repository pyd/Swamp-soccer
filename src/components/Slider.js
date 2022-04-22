import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    }
    return (
        <Slider  {...settings}>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://static.themoscowtimes.com/image/article_1360/78/4d6dcb5111f04fa2902bd2028125dd83.png" />
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="http://3seconds.justrun.ca/wp-content/uploads/2016/07/swamp-soccer-6-1.jpg" />
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://the18.com/sites/default/files/styles/photo_story_list_items_1016px_wide/public/photo-story-images/Swamp-Soccer-12.jpg?itok=7wCMseIF" />
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://storumanlapland.se/wp-content/uploads/2018/05/IMG_3728.jpg" />
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://i.cbc.ca/1.3726901.1471548262!/fileImage/httpImage/victory-at-world-swamp-soccer-championships.jpg" />
                    </div>
                </div>
            </div>    

        </Slider>
    )
};

export default ImageSlider;

//... is called spread operator