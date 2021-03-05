import React from "react";
import Headline from "../../../components/Headline";
import ProductsGrid from "../../../components/ProductsGrid";

function MoreFromCategory() {
    return (
        <section className="container py-50">
            <Headline headlineTitle='Više iz kategorije stolice'
                      headlineLink={{title: 'pogledaj sve', href: '/category'}}
            />
            <ProductsGrid/>
        </section>
    );
}

export default MoreFromCategory;
