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
      newUser: !this.state.newUser
    });
  };

  changleHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = async (e) => {
    e.preventDefault()
    const {username,password} = this.state
    try {
      const user = await axios.post('/api/auth/login', {username, password})
      // alert(user);
      console.log(user)
      this.props.history.push('/dashboard')
    }
    catch(err) {
        alert(err.response.request.response)
    }
  }
  
  
  register = async (e) => {
    e.preventDefault()
    const {username, password} = this.state
    try {
      const user = await axios.post('/api/auth/register', {username,password})
      alert(`Registered New ${user}`)
      this.props.history.push('/dashboard')
    }
    catch(err) {
      alert(err.response.request.response)
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="Auth">
        {this.state.newUser ? (
          <div>
            Register New User
            <form onSubmit={(e) => this.register(e)}>
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
            <button>Submit</button>
            </form>
            <button onClick={this.toggleNewUser}>Already a User</button>
          </div>
        ) : (
          <div>
            Login
            <form onSubmit={(e) => this.login(e)}>
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
            <button>Login</button>
            </form>
            <button onClick={this.toggleNewUser}>New User?</button>
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
