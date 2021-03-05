import React from 'react'
import './Signup.css'
import axios from 'axios'

class Signup extends React.Component {
  state = {
    name: '',
    lastName: '',
    password: '',
    email: '',
    avatar: '',
    error: '',
    nameMassage: 'true',
    lastNameMassage: 'true',
    passwordMessage: 'true',
    emailMessage: 'true',
  }
  hasNumber = (myString) => {
    return /\d/.test(myString)
  }

  onInputChange = (event) => {
    const message = event.target.name + 'Message'
    this.setState({
      [event.target.name]: event.target.value,
      [message]: 'false',
    })
  }

  onFileChange = (event) => {
    this.setState({
      avatar: event.target.files[0],
    })
  }

  validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/
    return re.test(email)
  }
  hasLowerCase = (str) => {
    return /[a-z]/.test(str)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    let checkMail = this.validateEmail(this.state.email)
    let psw = document.getElementById('pass').value
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
      this.state.name === '' ||
      this.state.lastName === '' ||
      this.state.password === '' ||
      this.state.email === '' ||
      typeof this.state.name === 'undefined' ||
      typeof this.state.lastName === 'undefined' ||
      typeof this.state.password === 'undefined' ||
      typeof this.state.email === 'undefined'
    ) {
      this.setState({
        error: 'Morate popuniti sva polja',
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
    } else if (checkMail === false) {
      this.setState({
        error: 'Morate unijeti ispravan email',
      })
    } else {
      var fd = new FormData()
      fd.append('name', this.state.name)
      fd.append('lastName', this.state.lastName)
      fd.append('password', this.state.password)
      fd.append('email', this.state.email)
      fd.append('avatar', this.state.avatar)
      axios
        .post('https://kommota.herokuapp.com/signup', fd)
        .then((response) => {
          console.log(response.data)
          if (!response.data.error) {
            console.log(response.data)
            this.props.history.push('/login')
          } else if (response.data.error) {
            if (response.data.error.errors) {
              let nodeError = response.data.error.errors
              console.log(nodeError)
              let errArray = []
              var x
              for (x in nodeError) {
                if (x === 'name') {
                  errArray.push(nodeError.name.message)
                }
                if (x === 'lastName') {
                  errArray.push(nodeError.lastName.message)
                }
                if (x === 'password') {
                  errArray.push(nodeError.password.message)
                }
                if (x === 'email') {
                  errArray.push(nodeError.email.message)
                }
              }

              let nodeErrorMessage = errArray.map((el) => <p key={el}>{el}</p>)

              this.setState({
                error: nodeErrorMessage,
              })
            } else {
              this.setState({
                error: response.data.error,
              })
            }
          }
        })
        .catch((err) => {
          console.log(err)
          this.setState({
            error: 'Došlo je do greške. Molimo Vas da pokušate ponovo.',
          })
        })
    }
  }

  renderError() {
    if (this.state.error) {
      return <h1 className="red"> {this.state.error} </h1>
    }
  }
  render() {
    return (
      <div className = "signup">
        <div>
          <form onSubmit={this.onFormSubmit} autoComplete="off" className="signupform">
          <h2 className = "signUpTitle" > Registrujte se </h2><br/>
            <div>
              <div>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Ime"
                  name="name"
                  onChange={this.onInputChange}
                  value={this.state.name}
                />{' '}
              </div>{' '}
            </div>{' '}
            <div>
              <div>
                <input
                id="lastName"
                  type="text"
                  placeholder="Prezime"
                  name="lastName"
                  onChange={this.onInputChange}
                  value={this.state.lastName}
                />{' '}
              </div>{' '}
            </div>{' '}
            <div>
              <div>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  placeholder="Lozinka"
                  onChange={this.onInputChange}
                  value={this.state.password}
                />{' '}
              </div>{' '}
            </div>{' '}
            <div>
              <div>
                <input
                  id="mail"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.onInputChange}
                  value={this.state.email}
                />{' '}
              </div>{' '}
            </div>{' '}
            <div>
              <div>
                <div>
                  <div>
                    <label htmlFor="file">
                      {' '}
                      Izaberite sliku (optional){' '}
                    </label>{' '}
                    <input
                    id="file"
                      className="center"
                      type="file"
                      name="avatar"
                      placeholder="File"
                      onChange={this.onFileChange}
                    />{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div>
              <button className="signUpBtn"> Registruj se </button>{' '}
            </div>{' '}
          </form>{' '}
          {this.renderError()}{' '}
        </div>{' '}
      </div>
    )
  }
}

export default Signup