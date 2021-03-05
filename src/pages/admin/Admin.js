import React from "react";
import DeleteUSer from "./partials/DeleteUser";
import EditProducts from "./partials/EditProducts";
import Products from "./partials/Products";
import CreateProduct from "./partials/CreateProduct"
import AllUsers from "./partials/AllUsers"


function Admin() {
    return (
        <React.Fragment>
            {/* 
            <DeleteUSer/>
            <EditProducts/>
             */}
            <Products/>
            <CreateProduct/>
            <AllUsers/>
        </React.Fragment>
    );
}

export default Admin;
