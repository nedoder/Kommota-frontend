import React from "react";

import PopularCategories from './partials/PopularCategories';
import NewInOffer from "./partials/NewInOffer";
import Giveaway from "./partials/Giveaway";
import Recommended from "./partials/Recommended";
import CategoryProduct from "../../components/CategoryProduct";

function Home() {
    return (
        <React.Fragment>
            <CategoryProduct/>
            <NewInOffer/>
            <Giveaway/>
            <Recommended/>
        </React.Fragment>
    );
}

export default Home;
