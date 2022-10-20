import React, { Component } from "react";
import ErrorIcon from '@mui/icons-material/Error';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="error-page">
        <h2> Error 404.  This page does not exist.</h2>
        <p>Select an option from the navigation bar.</p>
        <ErrorIcon  fontSize="large"/>
      </div>
    );
  }
} 
export default NotFoundPage;