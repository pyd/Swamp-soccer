import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoFootballOutline } from "react-icons/io5";

const Navigation = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    };

    window.onresize = () => {
        if (window.innerWidth > 768) {
            setToggleMenu(true);
        }
    }

    return (
        <header className="navigation">
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
                            <NavLink to="/infos">
                                Nos infos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/members">
                                Nos membres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/histoire">
                                Notre histoire
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
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
