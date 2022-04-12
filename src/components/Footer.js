import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrFacebook } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='global'>
            <div className='part'>
                <div className='logo'>
                    <h1>Foot 2 boue</h1><br></br>
                    <h2>suivez nous </h2><br></br>
                    <div className='icon'>
                        <h2><GrFacebook />  facebook</h2>
                        <h2><GrInstagram /> instagram</h2>
                        <h2><GrTwitter />   twitter</h2>
                    </div>
                </div> 
                <div>
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
                            <li>
                                <NavLink to="/Contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <h2 className='colos'>Simplon-Tout droits réservés</h2>
        </div>
    );
};

export default Footer;