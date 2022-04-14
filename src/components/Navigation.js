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
<<<<<<< HEAD
                        <li>
                            <NavLink to="/Infos">
=======

                        <li>
                            <NavLink to="/infos">
>>>>>>> 50e5653c1d543aeb48c3cf200685e6efb0123e5e
                                Nos infos
                            </NavLink>
                        </li>
                        <li>
<<<<<<< HEAD
                            <NavLink to="/Members">
=======
                            <NavLink to="/members">
>>>>>>> 50e5653c1d543aeb48c3cf200685e6efb0123e5e
                                Nos membres
                            </NavLink>
                        </li>
                        <li>
<<<<<<< HEAD
                            <NavLink to="/Histoire">
=======
                            <NavLink to="/histoire">
>>>>>>> 50e5653c1d543aeb48c3cf200685e6efb0123e5e
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