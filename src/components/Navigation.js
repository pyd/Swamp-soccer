import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoFootballOutline } from "react-icons/io5";

const Navigation = () => {

    // on screen > 768 px width nav is visible
    // on a smaller screen, nav links should be hidden, only beurger icon is visible
    const showNav = (window.innerWidth > 768) ? true : false;

    const [toggleMenu, setToggleMenu] = useState(showNav);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    };

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
                            <NavLink to="/Histoire">
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