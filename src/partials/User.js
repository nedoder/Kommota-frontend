import React from "react";
import './User.css';
import {NavLink} from "react-router-dom";

class User extends React.Component {
    constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
    render() {
    return (
        <div className="user">
            <button className="user__avatar"  onClick={this.showMenu}>
                <img src="./imgs/icons/avatar.svg" alt="Avatar"/>
            </button>
            {
          this.state.showMenu
            ? (
            <ul className="user__menu dropdown shadow-dark">
                <li>
                    <NavLink to="/login" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/login.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Prijavi se
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signup" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/sign-up.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Registracija
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/admin-panel.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Admin panel
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout" className="dropdown__link">
                        <img className="dropdown__link-icon"
                             src="./imgs/icons/logout.svg" alt=""
                        />
                        <span className="dropdown__link-title">
                            Odjavi se
                        </span>
                    </NavLink>
                </li>
            </ul>
            )
            : (
              null
            )
            }
        </div>
    );
    }
}

export default User;
