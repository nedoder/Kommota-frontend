import React from 'react'
import './EditUser.css'
import axios from 'axios'

class EditUser extends React.Component {
  state = {
    name: '',
    lastName: '',
    password: '',
    email: '',
    avatar: '',
    error: '',
    id: localStorage.getItem('userid'),
  }

  componentDidMount() {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    const bearer = 'Bearer Token' + token
    axios({
      method: 'post',
      url: 'https://kommota.herokuapp.com/users',
      data: { role: true },
      headers: { Authorization: bearer },
    }).then((response) => {
      let findUser = response.data.filter(
        (user) => user._id === this.props.match.params.id,
      )
      let userForEdit = findUser[0]
      this.setState({
        name: userForEdit.name,
        lastName: userForEdit.lastName,
        password: '',
        email: userForEdit.email,
      })
    })
  }
  hasNumber = (myString) => {
    return /\d/.test(myString)
  }

  validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/
    return re.test(email)
  }
  hasLowerCase = (str) => {
    return /[a-z]/.test(str)
  }

  onFileChange = (event) => {
    this.setState({
      avatar: event.target.files[0],
    })
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  onFormSubmit = (event) => {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    const bearer = 'Bearer Token' + token
    console.log(bearer)
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
      const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
      const bearer = 'Bearer Token' + token
      var fd = new FormData()
      fd.append('userid', this.state.userid)
      fd.append('name', this.state.name)
      fd.append('description', this.state.description)
      fd.append('price', this.state.price)
      fd.append('quantity', this.state.quantity)
      fd.append('avatar', this.state.avatar)
      fd.append('id', this.state.id)
      axios({
        method: 'post',
        url: 'https://kommota.herokuapp.com/edituser',
        data: fd,
        headers: { Authorization: bearer },
      })
        .then((response) => {
          if (!response.data.error) {
            this.props.history.push('/users')
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
                  errArray.push(nodeError.price.message)
                }
                if (x === 'email') {
                  errArray.push(nodeError.quantity.message)
                }
                if (x === 'password') {
                  errArray.push(nodeError.quantity.message)
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
          this.setState({
            error: err,
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
    console.log(this.state.id)

    return (
      <div>
        <div  className="edituser">
          <div>
            <form onSubmit={this.onFormSubmit} autoComplete="off" className="editForm">
              <div>
              <h2 className = "editTitle" >Izmijenite profil</h2><br/>
                <div>
                  <input
                    id="editname"
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
                        id="editimage"
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
                <button className="editbtn"> Potvrdi izmjene </button>{' '}
              </div>{' '}
            </form>{' '}
          </div>{' '}
          {this.renderError()}{' '}
        </div>{' '}
      </div>
    )
  }
}

export default EditUser