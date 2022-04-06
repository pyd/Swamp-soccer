import React from "react";

// Wanna add font awesome icons for partner but I had trouble to import them
// == Component
const Partnership = () => {
    return (
        <div className="partnership">
            <h2>Ils nous font déjà confiance</h2>
            <ul className="content">
                <li className="partner">
                    <img></img>
                    <p>Les vendeurs de machine à laver</p>
                </li>
                <li className="partner">
                    <img></img>
                    <p>La team Shreck</p>
                </li>
                <li className="partner">
                    <img></img>
                    <p>L'association Tadmorv</p>
                </li>
            </ul>
        </div>
    )
};

export default Partnership;