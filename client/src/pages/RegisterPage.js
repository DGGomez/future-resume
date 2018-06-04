import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {RegisterUser} from "../actions";

class RegisterPage extends Component {
constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
        username: "",
        name: ""
    };
}

componentDidMount(){
  console.log(this.props);
}
validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { RegisterUser, history } = this.props;
    const { email, password, username, name } = this.state;
    console.log('submit: ', email, password, username, name);

    RegisterUser(email, password, username, name, () => this.props.history.push("/dashboard"));
  }
  render() {
    return (

      <div className="container center-block">
      <div className="row">
  <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup className="form-horizontal" controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}


export default connect(null, { RegisterUser })(RegisterPage);