import './Nav.css';
import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {username, profile_pic} = this.props
    // console.log(this.props.id)
    if(this.props.location.pathname !== '/'){
    return <div className="Nav">
      <div>{username}</div>
      <img src={profile_pic} alt=""/>
      <button><Link to="/dashboard">Home</Link></button>
      <button><Link to="/post/postid">Post</Link></button>
      <button><Link to="/">Logout</Link></button>
      
    </div>;
    } else {
      return null
    }
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(withRouter(Nav))