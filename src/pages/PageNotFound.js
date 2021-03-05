import React from "react";
import './PageNotFound.css';

function PageNotFound() {
    return (
        <section className="page-not-found error-page container py-50">
            <img src="./imgs/icons/404.svg" className="page-not-found__icon" alt=""/>
            <h1 className="page-not-found__title">
                Došlo je do greške
            </h1>
            <span className="page-not-found__subtitle">
                Stranica koju pokušavate da pretražite ne postoji.
            </span>
            <button className="btn btn-icon-right">
                Nazad na početnu
            </button>
        </section>
    );
}

export default PageNotFound;
