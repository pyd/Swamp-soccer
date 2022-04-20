import Hero from "../components/Home/Hero";
import Presentation from "../components/Home/Presentation";
import Partnership from "../components/Home/Partnership";
import Stats from "../components/Home/Stats";



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
