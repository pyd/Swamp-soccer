import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoFootballOutline } from "react-icons/io5"

const Navigation = () => {

    const widthLimit = 768

    /**
     * check if screen width is gt 768px
     * on screen > 768 px width nav is visible
     * on a smaller screen, nav links should be hidden, only beurger icon is visible
     * @returns boolean
     */
    const screenIsMedium = function() {
        return window.innerWidth > widthLimit
    }

    /**
     * handler for resize event
     * expand/collapse nav depending on the screen width
     */
    const resizeHandler = function () {
        setToggleMenu(screenIsMedium())
    }

    // local state for expanding/collapsing navigation 
    const [toggleMenu, setToggleMenu] = useState(screenIsMedium())

    // add listener for the resize event (on mount) and clean it up on unmount
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            window.addEventListener('resize', resizeHandler())
        })
        return () => {
            window.removeEventListener('resize', resizeHandler())
        }
    }, [])


    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
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
                            <NavLink to="/membres">
                                Nos membres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/histoire">
                                Notre histoire
                            </NavLink>
                        </li>
                        <li>
                            <button>
                                <NavLink to="/contact">
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