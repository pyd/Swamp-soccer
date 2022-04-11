import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="navigation">
            {/* <img className="logo" src="#" alt="logo" /> */}
            <h2 className="logo">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    Foot 2 boue
                </NavLink>
            </h2>
            <nav>
                <ul className="nav__links">
                    <li>
                        <NavLink to="/Infos" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Nos infos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Members" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Nos membres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Notre histoire
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button>
                <NavLink to="/Contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Contact
                </NavLink>
            </button>
        </header>

export default Navigation;