import './Nav.css';
import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="Nav">
      <button><Link to="/dashboard">Home</Link></button>
      <button><Link to="/post/postid">Post</Link></button>
      <button><Link to="/">Logout</Link></button>
      
    </div>;
  }
}
export default Nav