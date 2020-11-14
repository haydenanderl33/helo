import "./Auth.css";
import React, { Component } from "react";
import axios from 'axios'

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      newUser: false,
    };
  }

  toggleNewUser = () => {
    this.setState({
      newUser: !this.state.newUser,
    });
  };

  changleHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="Auth">
        {this.state.newUser ? (
          <div>
            Register View
            <form>
              <input
                name="username"
                value={username}
                placeholder="Username"
                onChange={(e) => this.changleHandler(e)}
              />
              <br/>
              <input
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => this.changleHandler(e)}
              />
            </form>
            <button onClick={this.toggleNewUser}>Already a User</button>
            <button>Submit</button>
          </div>
        ) : (
          <div>
            Login
            <form>
              <input
                name="username"
                value={username}
                placeholder="Username"
                onChange={(e) => this.changleHandler(e)}
              />
              <br/>
              <input
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => this.changleHandler(e)}
              />
            </form>
            <button onClick={this.toggleNewUser}>New User?</button>
            <button>Login</button>
          </div>
        )}
      </div>
    );
  }
}
export default Auth;

/* <form className="Auth">
      <div>Username
      <input name="username" value={username} onChange={()=> this.changeUsername()}/>
      </div>
      <div>Password  
      <input/>
      </div>
      
      <div className="Buttons">
        <button>Login:</button>
        <button>Register:</button>
      </div>

      </form>; */
