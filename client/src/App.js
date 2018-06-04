import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import { tokenLogin } from './actions';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogoutPage';

import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    //this.props.tokenLogin();

  }
  render() {
    return (
      <div className="container">
          <Router>
            <div style={{ marginTop: '7rem' }}>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/logout" exact component={LogoutPage} />
                <Footer/>
            </div>
          </Router> 
        </div>
    );
  }
}

export default App;
