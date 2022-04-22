import React from "react";
import { GiWashingMachine } from "react-icons/gi";
import { FaAmbulance, FaBath, FaFrog, FaCloudShowersHeavy } from "react-icons/fa";

// == Component
const Partnership = () => {

    return (
        <div className="partnership">
            <h2>Ils nous font déjà confiance</h2>
            <div className="row">

                <div className="partner--col">
                    <GiWashingMachine className="icon"/>
                    <p>Les vendeurs de machine à laver</p>
                </div>

                <div className="partner--col">
                    <FaBath className="icon"/>
                    <p>Les boules de bain</p>
                </div>

                <div className="partner--col">
                    <FaAmbulance className="icon"/>
                    <p>Les ambulanciers</p>
                </div>

                <div className="partner--col">
                    <FaFrog className="icon"/>
                    <p>Les marais de Shreck</p>
                </div>

                <div className="partner--col">
                    <FaCloudShowersHeavy className="icon"/>
                    <p>La météo du Nord</p>
                </div>
            </div>
        </div>
    )
};

export default Partnership;