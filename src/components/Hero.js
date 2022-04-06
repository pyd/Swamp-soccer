// This component goes to Homepage (first element).
import React from "react";


// == Component
const Hero = () => {
    return (
        <div class="hero bg">
            <h1 className="hero__title">Foot 2 boue</h1>
            <div className="hero__btns">
                <p>Prêt à en découdre ?</p>
                <p className="color2">
                    <a href="#" >Rejoignez nous dès maintenant !</a>
                </p>
            </div>
        </div>
    )
};

export default Hero;