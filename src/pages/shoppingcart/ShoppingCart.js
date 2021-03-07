import React from 'react';
import axios from 'axios';
import "./ShoppingCart.css";

class Shopping extends React.Component {
    state = {
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        cart: [],
        subtotal: "",
        error: null
    }

    componentDidMount() {
        const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
        const bearer = 'Bearer Token' + token;
        axios({
                method: 'post',
                url: 'https://kommota.herokuapp.com/carts',
                data: { id: this.state.id },
                headers: { Authorization: bearer },
            }).then((response) => {
                if (response.data.error) {
                    this.setState({
                      error: response.data.error,
                    })
                  } else {
                response.data.data.items.map((data) => {
                    let name = data.productId.name;
                    data.productId.name = name;
                })
                this.setState({
                    cart: response.data.data.items,
                    subtotal: response.data.data.subTotal
                  })
                }
            })
            .catch((err) => console.log(err));
    }

    renderError() {
        if (this.state.error) {
            return <p className="title"> { this.state.error } </p>;
        }
    }
    handleDelete = (e) => {
        e.preventDefault();
        const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
        const bearer = 'Bearer Token' + token;
        axios({
            method: 'delete',
            url: 'https://kommota.herokuapp.com/cart',
            data: { id: this.state.id },
            headers: { Authorization: bearer },
        }).then((response) => {
            if (response.data.error) {
                this.setState({
                  error: response.data.error,
                })
              } else {
            this.setState({
                cart: [],
                subtotal: 0
              })
            }
        })
        .catch((err) => console.log(err));
    }

    handleCheckout = (e) => {
        e.preventDefault();
        const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
        const bearer = 'Bearer Token' + token;
        axios({
            method: 'delete',
            url: 'https://kommota.herokuapp.com/checkout',
            data: { email: this.state.email },
            headers: { Authorization: bearer },
        }).then((response) => {
            if (response.data.error) {
                this.setState({
                  error: response.data.error,
                })
              } else {
            this.setState({
                cart: [],
                subtotal: 0
              })
            }
        })
        .catch((err) => console.log(err));
    }

    render() {
        if (this.state.error !== null) {
            return <h2 className="userstitle">{ this.state.error }</h2>
          } else {
        return ( 
            <div className="shop">
            <h3 className="heading">Vaša korpa</h3> 
            <table>
            <tbody>
            <tr  className = "tableRow">
                    <th className="headings">Ime proizvoda</th>
                    <th className="headings">CIjena</th>
                    <th className="headings">Količina</th>
                    <th className="headings">Cijena</th>
            </tr>
            {this.state.cart.map((product) => {
                return (
                    <tr  className = "tableRow" key={product._id}>
                       <td className="items">{product.productId.name}</td> 
                        <td className="items">{product.price}</td>
                        <td className="items">{product.quantity}</td>
                        <td className="items">{product.total}</td>
                    </tr>           
                       
                )          
            })}
            <tr>
                <td colSpan="4" className="items">Ukupno za plaćanje: {this.state.subtotal}</td>
            </tr>
            </tbody>
            </table>
            <button className="deleteCart" onClick={this.handleDelete}>Obriši korpu</button>
            <button className="checkout" onClick={this.handleCheckout}>Nastavi sa narudžbinom</button>
            </div>
        )
          }
    }
}
export default Shopping