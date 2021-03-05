import React from "react";
import {NavLink} from "react-router-dom";


import './Nav.css';

function Nav() {
    return (
        <nav className="nav bg-gradient">
            <div className="container container--fluid">
                <ul className="nav-list">
                    <li>
                        <button className="categories-menu-button">
                            <svg className="icon-24 mr-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 stroke="#fff" strokeWidth="1.5">
                                <path
                                    d="M16.285 2h3.267A2.46 2.46 0 0 1 22 4.47v3.294a2.46 2.46 0 0 1-2.448 2.47h-3.267c-1.352 0-2.449-1.107-2.449-2.47V4.47A2.46 2.46 0 0 1 16.285 2zM4.449 2h3.266a2.46 2.46 0 0 1 2.449 2.47v3.294a2.46 2.46 0 0 1-2.449 2.47H4.449A2.46 2.46 0 0 1 2 7.764V4.47A2.46 2.46 0 0 1 4.449 2zm0 11.766h3.266a2.46 2.46 0 0 1 2.449 2.471v3.293A2.46 2.46 0 0 1 7.714 22H4.449A2.46 2.46 0 0 1 2 19.53v-3.293a2.46 2.46 0 0 1 2.449-2.471zm11.836 0h3.267A2.46 2.46 0 0 1 22 16.237v3.293A2.46 2.46 0 0 1 19.552 22h-3.267a2.46 2.46 0 0 1-2.449-2.47v-3.293a2.46 2.46 0 0 1 2.449-2.471z"/>
                            </svg>
                            Kategorije
                        </button>
                    </li>
                    <li>
                        <NavLink to="/about-us" className="nav-list__link">
                            O nama
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-list__link">
                            Kontakt
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/how-to-buy" className="nav-list__link">
                            Kako kupiti
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
