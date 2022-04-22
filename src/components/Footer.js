import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer__container'>
                <h2 className='footer__container--title'>Foot 2 boue</h2>

                <ul className='footer__container__links footer__container__links--icons'>
                    <li>
                        <a href="https://fr-fr.facebook.com/swampsoccerworldcup/">
                            <GrFacebook />
                            <span> Facebook</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="https://www.instagram.com/swampsoccersweden/?hl=fr">
                            <GrInstagram />
                            <span> Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/i/events/998931208980582400">
                            <GrTwitter />
                            <span> Twitter</span>
                        </a>
                    </li>
                </ul>



                <ul className="footer__container__links footer__container__links--navigation">
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
                        <NavLink to="/Contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <p className='footer__allRightReserved'>Simplon - Tout droits réservés</p>

        </div>
    );
};

export default Footer;