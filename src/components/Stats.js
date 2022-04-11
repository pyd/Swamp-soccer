import React from "react";
import { IoFootballOutline } from "react-icons/io5";

// == Component
const Stats = () => {
    return (
        <div className="statistiques">
            <div className="stats">
                <div className="container">
                
                    <h2 className="label">Nos chiffres clés</h2>

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
            {/* <IoFootballOutline className="icon"/> */}
        </div>

    )
};

export default Stats;