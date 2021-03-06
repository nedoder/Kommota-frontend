import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './CreateProduct.css';

class CreateProduct extends React.Component {
    
    state = {
        userid: JSON.parse(JSON.stringify(localStorage.getItem("id"))),
        name: "",
        category: "",
        description: "",
        price: "",
        quantity: "",
        image: "",
        giveaway: false,
        error: null,
    };
    
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    onFileChangeHandler = (event) => {
        this.setState({
          image: event.target.files[0],
        });
      };
    onFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.image === "" || this.state.image === undefined) {
            this.setState({
              error: "Morate unijeti sliku proizvoda"
            });
        }
        var fd = new FormData();
        fd.append("userid", this.state.userid);
        fd.append("name", this.state.name);
        fd.append("category", this.state.category);
        fd.append("description", this.state.description);
        fd.append("price", this.state.price);
        fd.append("quantity", this.state.quantity);
        fd.append("image", this.state.image);
        fd.append("giveaway", this.state.giveaway);
        const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));
        const bearer = 'Bearer Token' + token;
        console.log(token);
        axios({
            method: 'post',
            url: "https://kommota.herokuapp.com/createproduct",
            data: fd,
            headers: {
                Authorization : bearer
            }
        })
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data.error);
                    this.setState({
                        error: response.data.error,
                    })
                } else {
                    console.log(response.data);
                }
            })
            .catch((error) =>
                this.setState({
                    error: "Došlo je do greške.Molimo pokušajte ponovo. ",
                })
            );
    };
    renderError() {
        if (this.state.error) {
            return <p> { this.state.error } </p>;
        }
    }
    render() {
        return (  
            <div className = "wrap">
            <form autoComplete = "off" className = "createForm" onSubmit = { this.onFormSubmit }>
            <h2 className = "createProduct" > Dodajte proizvod </h2><br/>
            <input type = "text" name= "userid" id ="userid" onChange = { this.onInputChange }  value = {this.state.userid} disabled/><br/> 
            <input type = "text" placeholder = "Ime" id = "name" name = "name" onChange = { this.onInputChange } value = { this.state.name }/><br/>
            <input type = "text" placeholder = "Opis" id = "description" name = "description" onChange = { this.onInputChange } value = { this.state.description }/><br/>
            <input type = "number" placeholder = "Količina" id = "quantity" name = "quantity" onChange = { this.onInputChange } value = { this.state.quantity }/><br/>
            <input type = "number" placeholder = "Cijena" id = "price" name = "price" onChange = { this.onInputChange } value = { this.state.price }/><br/>
            <input type = "file"  id = "file" name = "image" onChange={ this.onFileChangeHandler}/><br/>
            <label htmlFor="giveaway"> Poklon</label>
            <input type = "checkbox" id = "giveaway" name = "giveaway"  value = "giveaway" onChange = {(e) => this.setState({giveaway: !this.state.giveaway.value})}/><br/>
            <select name="category" id="category" value= {this.state.category} onChange = { this.onInputChange }>
                <option value="Dnevna soba">Dnevna soba</option>
                <option value="Stolovi">Stolovi</option>
                <option value="Stolice">Stolice</option>
                <option value="Aksesoari">Aksesoari</option>
                <option value="Police">Police</option>
                <option value="Rasvjeta">Rasvjeta</option>
                <option value="Tepisi">Tepisi</option>
                <option value="Spavaća soba">Spavaća soba</option>
                <option value="Ormari">Ormari</option>
                <option value="Kuhinjski elementi">Kuhinjski elementi</option>
                <option value="Kancelarijski namještaj">Kancelarijski namještaj</option>
            </select>
            <br/>
            <button className = "createButton"> Dodajte proizvod </button><br/>
            </form><br/> { this.renderError() } <br/>
            </div>

        );
    }
}

export default CreateProduct;