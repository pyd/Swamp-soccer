import React from "react";

// == Scss Import
import '../stylesheets/pages/_home.scss';

// == Page
const Home = () => {
    return (
        <div className="home">

            <div class="header">
                <h1 className="home__title">Swamp soccer</h1>
                <div className="home__btns">
                    <p>Prêt à en découdre ?</p>
                    <p className="color2">Rejoignez nous dès maintenant !</p>
                </div>

                <h2>Nos stats</h2>
                <div className="home__info--bonus">

                    <div className="container">

                        <div className="bonus">
                            <span>126</span>
                            <p>t-shirts sales</p>
                        </div>

                        <div className="bonus">
                            <span>03</span>
                            <p>dents perdues</p>
                        </div>

                        <div className="bonus">
                            <span>58</span>
                            <p>bains de boues</p>
                        </div>

                        <div className="bonus">
                            <span>12</span>
                            <p>poteries offertes</p>
                        </div>

                    </div>

                </div>


  





            </div>
            <div className="home__partnership">
                    <ul className="partnership">
                        <h2>Ils nous font déjà confiance</h2>
                        <li>Les vendeurs de machines à laver</li>
                        <li>Les kinéthérapeutes</li>
                        <li>L'association Tadmorv</li>
                        <li>..</li>
                    </ul>
                </div>

        </div>
    )
};

export default Home;