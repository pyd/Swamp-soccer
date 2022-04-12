import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoFootballOutline } from "react-icons/io5";

const Navigation = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <header className="navigation">
            {/* <img className="logo" src="#" alt="logo" /> */}
            <h2 className="logo">
                <NavLink to="/" >
                    Foot 2 boue <IoFootballOutline className="icon" />
                </NavLink>
            </h2>
            <nav>

                {/* if toggleMenu is false, then it return anything */}
                {toggleMenu && (

                    <ul className="nav__links">
                        <li>
                            <NavLink to="/Infos">
                                Nos infos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Members">
                                Nos membres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">
                                Notre histoire
                            </NavLink>
                        </li>
                        <li>
                            <button>
                                <NavLink to="/Contact">
                                    Contact
                                </NavLink>
                            </button>
                        </li>
                    </ul>

                )}

            </nav>
            <div className="nav__toggle"
                onClick={toggleNavSmallScreen}
            >
                <div className="bar" />
            </div>
        </header>
    )
}

export default Navigation;