import React from "react";
import './User.css';
import {NavLink} from "react-router-dom";

function User() {
    return (
        <div className="user">
            <button className="user__avatar">
                <img src="./imgs/icons/avatar.svg" alt="Avatar"/>
            </button>
            <ul className="user__menu dropdown shadow-dark">
                <li>
                    <NavLink to="" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/login.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Prijavi se
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/sign-up.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Registracija
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/heart.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Lista želja
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/admin-panel.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Admin panel
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/logout.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Odjavi se
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default User;
