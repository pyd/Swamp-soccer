import React from "react";
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Transition from "../components/Transition";
import Partnership from "../components/Partnership";
import Stats from "../components/Stats";



// == Page
const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Stats />
            <Presentation />
            <Transition />
            <Partnership />
        </div>
    )
};

export default Home;