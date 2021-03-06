import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Products.css';


class Products extends React.Component {
    state = {
        products: [],
        userid: JSON.parse(JSON.stringify(localStorage.getItem("id"))),
        error: null,
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const id = this.state.userid;
        const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));
        const bearer = 'Bearer Token' + token;
        axios({
            method: 'post',
            url: "https://kommota.herokuapp.com/userproducts", 
            data: { id : id },
            headers: {Authorization : bearer}
        })
            .then((response) => {
                if (response.data.error) {
                    this.setState({
                        userid: "",
                        error: response.data.error,
                    })
                } else {
                    this.setState({
                        products: response.data
                    })

                }
            })
            .catch((error) =>
                this.setState({
                    userid: "",
                    error: "Došlo je do greške. Molimo pokušajte ponovo.",
                })
            );
    };
    renderError() {
        if (this.state.error) {
            return <p> { this.state.error } </p>;
        }
    }

    render() {
        var products = this.state.products.map(product => {
            var item = product._id;
            const Delete = (event) => {
                const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));
                const bearer = 'Bearer Token' + token;
                axios({
                    method: 'post',
                    url: "https://kommota.herokuapp.com/deleteproduct", 
                    data: { id : item },
                    headers: {Authorization : bearer}
                })
                .then((response) => {
                    if (response.data.error) {
                        this.setState({
                            error: response.data.error
                        })
                    } else {
                        let newProducts = this.state.products.filter((product) => product._id!==response.data);
                        this.setState({
                          products: newProducts,
                        });
                    }
                })
                .catch((error) =>
                    this.setState({
                        error: "Došlo je do greške. Molimo pokušajte ponovo.",
                    })
                );
            }
           
            return (
            <table   key={product._id}>
            <tbody>
                <tr className = "tableRow">
                    <th className="headings">Ime</th>
                    <th className="headings">Cijena</th>
                    <th className="headings">Kategorija</th>
                    <th className="headings">Količina</th>
                    <th className="headings">Obriši</th>
                </tr>
                <tr className = "tableRow">
                    <td className="items">{product.name}</td>
                    <td className="items">{product.price}</td>
                    <td className="items">{product.category}</td>
                    <td className="items">{product.quantity}</td>
                    <td className="items"><button className = "deleteBTN" onClick={ Delete }> X </button></td>
                </tr>
                </tbody>
            </table>
            )
        })
        return ( 
            <div className = "wrappedProducts">
            <form autoComplete = "off" className = "clistForm" onSubmit = { this.onFormSubmit }>
            <button className = "productsButton"> Vidi sve proizvode </button><br/>
            </form>
            {products}
            { this.renderError() } <br/>
            </div>
        );
    }
}




 
export default Products;