import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Partnership from "../components/Partnership";
import Stats from "../components/Stats";



// === Page
const Home = () => {
    return (
        <div className="home">
            <Hero />
             <Stats />
            <Presentation />
            <Partnership />
        </div>
    )
};

export default Home;
