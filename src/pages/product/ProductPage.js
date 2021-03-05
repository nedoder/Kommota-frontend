import React from "react";

import Product from "./partials/Product";
import MoreFromCategory from "./partials/MoreFromCategory";

function ProductPage() {
    return (
        <React.Fragment>
            <Product/>
            <MoreFromCategory/>
        </React.Fragment>
    );
}

export default ProductPage;
