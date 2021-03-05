import React from 'react'
import './AllUsers.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Users extends React.Component {
  state = {
    allUsers: [],
  }

  componentDidMount() {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    const bearer = 'Bearer Token' + token
    console.log(bearer)
    axios({
      method: 'post',
      url: 'https://kommota.herokuapp.com/users',
      data: { role: true },
      headers: { Authorization: bearer },
    }).then((response) => {
          response.data.map((user) => {
          let image = user.avatar.slice(0,-18);
          let avatar =  image.replace("file/d/", "thumbnail?id=");
          user.avatar = avatar;
          console.log(user.avatar)
        })
      this.setState({
        allUsers: response.data,
      })
    })
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
        console.log(response.data)
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
    console.log(this.state.allUsers)
    if (this.state.allUsers.length === 0) {
      return <div>Loading</div>
    } else {
      const users = this.state.allUsers.map((user) => {
        return (
                <div key={user._id} className="users">
                  <h3 className="title"> {user.name} </h3> <h3 className="title"> {user.lastName} </h3>
                  <img src={user.avatar} target="_blank" alt="slika" />
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
      return <div> {users}</div>
    }
  }
}

export default Users
