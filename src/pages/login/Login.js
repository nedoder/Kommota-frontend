import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Login.css';

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        error: null,
        emailMessage: "",
        passwordMessage: ""
    };

    onInputChange = (event) => {
        const message = event.target.name + "Message";
        this.setState({
            [event.target.name]: event.target.value,
            [message]: false
        });
    };

    hasLowerCase = (str) => {
        return /[a-z]/.test(str)
    }
    hasNumber = (myString) => {
        return /\d/.test(myString)
    }

    validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let checkMail = this.validateEmail(this.state.email)
        let psw = document.getElementById('password').value
        let brVelikihSlova = 0
        for (let i = 0; i < psw.length; i++) {
          if (psw[i] === psw[i].toUpperCase()) {
            if (psw[i] >= 0 || psw[i] <= 9) {
            } else {
              brVelikihSlova++
            }
          }
        }
        if (
          this.state.email === '' ||
          this.state.password === '' ||
          typeof this.state.email === 'undefined' ||
          typeof this.state.password === 'undefined'
        ) {
        this.setState({
          error: 'Morate popuniti oba polja',
        })
        } else if (checkMail === false) {
          this.setState({
            error: 'Morate unijeti ispravan email',
          })
        } else if (this.hasLowerCase(psw) === false) {
          this.setState({
            error: 'Lozinka mora sadržati bar jedno malo slovo. ',
          })
        } else if (this.hasNumber(psw) === false) {
          this.setState({
            error: 'Lozinka mora sadržati bar jedan broj.',
          })
        } else if (brVelikihSlova === 0) {
          this.setState({
            error: 'Lozinka mora sadržati bar jedno veliko slovo.',
          })
        } else if (psw.length < 5 || psw.length > 25) {
          this.setState({
            error: 'Lozinka može sadržati minimalno 5, a maksimalno 25 karaktera.',
          })
        } else {
        axios
            .post("https://kommota.herokuapp.com/login", {
                email: this.state.email,
                password: this.state.password,
            })
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data.error);
                    this.setState({
                        error: response.data.error,
                    })
                } else {
                    localStorage.setItem("id", response.data.user[0]._id);
                    localStorage.setItem("email", response.data.user[0].email);
                    localStorage.setItem("image", response.data.user[0].avatar);
                    localStorage.setItem("role", response.data.user[0].role);
                    localStorage.setItem("name", response.data.user[0].name);
                    localStorage.setItem("lastname", response.data.user[0].lastName);
                    localStorage.setItem("token", response.data.token);
                    this.props.history.push("/");
                }
            })
            .catch((error) =>
                this.setState({
                    email: "",
                    password: "",
                    error: "Došlo je do greške. Molimo pokušajte ponovo.",
                })
            );
        }
        
    };
    renderError() {
        if (this.state.error) {
            return <p> { this.state.error } </p>;
        }
    }
    render() {
        return ( 
            <div className = "wrapper">
            <form autoComplete = "off" className = "form" onSubmit = { this.onFormSubmit }>
            <h2 className = "login" > Log in </h2><br/>
            <input type = "text" placeholder = "Email" id = "email" name = "email" onChange = { this.onInputChange } value = { this.state.email }/><br/>
            <input type = "password" id = "password" name = "password" placeholder = "Password" onChange = { this.onInputChange }value = { this.state.password }/><br/>
            <button className = "button" > Login </button><br/>
            </form><br/> { this.renderError() } <br/>
            </div>

        );
    }
    
}

export default Login;