import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <di>
        <div className='navigation' >
            
                <h2> SWAMP SOCCER </h2>
                <ul className='nav' >
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Infos </li>
                    </NavLink>
                    <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className='la'>Membres</li>
                    </NavLink>
                    <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className='la'>Histoire</li>
                    </NavLink>
                    <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className='la'>Contact</li>
                    </NavLink>
                </ul>
        </div> 
        <div className='rect'></div> 
        </di> 
          
    );
};

export default Navigation;