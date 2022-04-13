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
                        <GrFacebook /> <span>Facebook</span>
                    </li>
                    <li>
                        <GrInstagram /> <span>Instagram</span>
                    </li>
                    <li>
                        <GrTwitter /> <span>Twitter</span>
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
                        <NavLink to="/About">
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