import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import './index.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/home/Home";
import ProductPage from "./pages/product/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import EditUser from "./pages/editProfile/EditUser"

// Slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <Router>
        <Header/>
        <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/edit/:id" component={EditUser}/>
            <Route exact path="/product" component={ProductPage}/>
            <Route exact path="/404" component={PageNotFound}/>
        </main>
        <Footer/>
    </Router>,
    document.getElementById('root')
);
