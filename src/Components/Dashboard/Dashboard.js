import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>This is the Dashboard Component</div>;
  }
}
export default withRouter(Dashboard)