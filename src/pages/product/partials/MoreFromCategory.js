import React from "react";
import Headline from "../../../components/Headline";
import ProductsGrid from "../../../components/ProductsGrid";
import RecommendedProducts from "../../../components/RecommendedProducts";

function MoreFromCategory() {
    return (
        <section className="container py-50">
            <Headline headlineTitle='Povezani proizvodi'
                      headlineLink={{title: 'pogledaj sve', href: '/category'}}
            />
            <RecommendedProducts/>
        </section>
    );
}

export default MoreFromCategory;
