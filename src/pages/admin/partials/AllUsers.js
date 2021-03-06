import React from 'react'
import './AllUsers.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Users extends React.Component {
  state = {
    allUsers: [],
    error: null
  }

  componentDidMount() {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    const bearer = 'Bearer Token' + token
    const role = JSON.parse(localStorage.getItem("role"));
    axios({
      method: 'post',
      url: 'https://kommota.herokuapp.com/users',
      data: { role: role },
      headers: { Authorization: bearer },
    }).then((response) => {
          if (response.data.error) {
            this.setState({
              error: response.data.error,
            })
          } else {
            response.data.map((user) => {
            let image = user.avatar.slice(0,-18);
            let avatar =  image.replace("file/d/", "thumbnail?id=");
            user.avatar = avatar;
          })
          this.setState({
          allUsers: response.data,
          })
        }
      
    })
  }
   renderError() {
        if (this.state.error) {
            return <p className="title"> { this.state.error } </p>;
        }
    }

  handleDelete = (id) => {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    const bearer = 'Bearer Token' + token

    axios({
      method: 'delete',
      url: 'https://kommota.herokuapp.com/deleteuser',
      data: { id: id },
      headers: { Authorization: bearer },
    })
      .then((response) => {
        let newUsers = this.state.allUsers.filter(
          (user) => user._id !== response.data.id,
        )
        this.setState({
          allUsers: newUsers,
        })
      })
      .catch((error) => console.log(error))
  }
  render() {
    if (this.state.allUsers.length === 0) {
      return <h2 className="userstitle">{ this.state.error } </h2>
    } else {
      const users = this.state.allUsers.map((user) => {
        return (
                <div key={user._id} className="userdiv">
                  <img src={user.avatar} target="_blank" alt="slika" />
                  <h3 className="title"> {user.name} </h3> <h3 className="title"> {user.lastName} </h3>
                  <Link to={`/edit/${user._id}`} className="editUser">
                    Edit
                  </Link>
                  <button
                    className="btnDelete"
                    onClick={() => this.handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </div>
                 
        )
      })
      return <div  className="users">
        <h2 className="userstitle">Svi korisnici</h2>
        {users}
       </div>
    }
  }
}

export default Users
