import React from "react";

import PopularCategories from './partials/PopularCategories';
import NewInOffer from "./partials/NewInOffer";
import Giveaway from "./partials/Giveaway";
import Recommended from "./partials/Recommended";

function Home() {
    return (
        <React.Fragment>
            <PopularCategories/>
            <NewInOffer/>
            <Giveaway/>
            <Recommended/>
        </React.Fragment>
    );
}

export default Home;
