import React from "react";
import Headline from "../../../components/Headline";
import ProductsGrid from "../../../components/ProductsGrid";
import GiveawayProducts from "../../../components/GiveawayProducts";

function Giveaway() {
    return (
        <section className="container py-50">
            <Headline headlineTitle='Poklanjamo'
                      headlineLink={{title: 'pogledaj sve', href: '/giveaway'}}
            />
            <GiveawayProducts/>
        </section>
    );
}

export default Giveaway;
