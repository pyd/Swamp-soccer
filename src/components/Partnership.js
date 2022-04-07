import React from "react";
import { GiWashingMachine } from "react-icons/gi";
import { FaAmbulance, FaBath, FaBandAid, FaFrog, FaCloudShowersHeavy } from "react-icons/fa";


// == Component
const Partnership = () => {
    return (
        <div className="partnership">
            <h2>Ils nous font déjà confiance</h2>
            <ul className="content">
                <li className="partner">
                <GiWashingMachine />
                    <p>Les vendeurs de machine à laver</p>
                </li>

                <li className="partner">
                <FaBath/>
                <p>Les boules de bain</p>
                </li>

                <li className="partner">
                    <FaAmbulance />
                    <p>Les ambulanciers</p>
                </li>
                <li className="partner">
                    <FaFrog />
                    <p>Les marais de Shreck</p>
                </li>

                <li className="partner">
                    <FaCloudShowersHeavy />
                    <p>La météo du Nord</p>
                </li>


            </ul>
        </div>
    )
};

export default Partnership;