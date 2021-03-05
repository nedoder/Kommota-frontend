import React from "react";
import {Link} from "react-router-dom";

import './Header.css';
import ShoppingCart from "./ShoppingCart";
import Search from "./Search";
import User from "./User";
import Nav from './Nav';

function Header() {
    return (
        <header className="shadow-dark">
            <div className="header container container--fluid">
                <button className="categories-menu-mobile-button mr-8">
                    <img src="/imgs/icons/menu.svg" alt=""/>
                </button>
                <Link to="/">
                    <img className="header__logo" src="./imgs/icons/logo.svg" alt="Kommota"/>
                </Link>
                <Search/>
                <ShoppingCart/>
                <User/>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;
