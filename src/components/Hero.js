// This component goes to Homepage (first element).
import React from "react";
import { IoFootballOutline } from "react-icons/io5";


// == Component
const Hero = () => {
    return (
        <div className="hero bg">
            <div className="content">
                <h1 className="hero__title">Foot 2 boue <IoFootballOutline className="icon" /></h1>
                <div className="hero__btns">
                    <p>Prêt à en découdre ?</p>
                    <p className="color2">
                        Découvez nous aujourd'hui !
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Hero;