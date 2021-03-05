import React from "react";
import Headline from "../../../components/Headline";
import ProductsGrid from "../../../components/ProductsGrid";
import AllProducts from "../../../components/AllProducts";

function NewInOffer() {
    return (
        <section className="container py-50">
            <Headline headlineTitle='Svi proizvodi'
                      headlineLink={{title: 'pogledaj sve', href: '/new-in-the-offer'}}
            />
            <AllProducts/>
        </section>
    );
}

export default NewInOffer;
