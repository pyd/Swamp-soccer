import React from "react";
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";



// == Page
const Home = () => {
    return (
        <div className="home">
            <Hero />
            <div className="transition">
                <div className="barre1" />
            </div>
            <Presentation />
        </div>
    )
};

export default Home;