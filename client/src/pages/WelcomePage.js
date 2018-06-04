import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class WelcomePage extends Component {
  componentDidMount() {
    const { user } = this.props;

    if(user !== undefined) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
  <div className="container center-block">
  <div className="row">
  <div className="col-md-6 col-md-offset-3">
      <div>
        <img className="center-block form-group" src="./images/logo_2.png" alt="react-logo"/>
      </div>
      <div className="text-center form-group">
        <h1>Welcome to Feed The Beast</h1>
      </div>
      <div className="text-center form-group"> 
        <h3>Make your weekly meal plan</h3>
      </div>
      <div className = " form-group"> 
        <Link to ="/login" className="btn btn-default btn-lg btn-block">Login</Link>
      </div>
      <div className = "top-buffer">
        <Link to ="/register" className="btn btn-default btn-lg btn-block">Register</Link>
      </div>
    </div>
    </div>
    </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};

export default connect(mapStateToProps, null)(WelcomePage);
