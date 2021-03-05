import React from "react";
import Headline from "../../../components/Headline";
import ProductsGrid from "../../../components/ProductsGrid";
import RecommendedProducts from "../../../components/RecommendedProducts";

function Recommended() {
    return (
        <section className="container py-50">
            <Headline headlineTitle='Predlažemo vam'
                      headlineLink={{title: 'pogledaj sve', href: '/recommended'}}
            />
            <RecommendedProducts/>
        </section>
    );
}

export default Recommended;
