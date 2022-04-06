import React from "react";
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Transition from "../components/Transition";



// == Page
const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Transition />
            <Presentation />
        </div>
    )
};

export default Home;