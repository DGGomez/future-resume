import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footerStyle} className="text-center navbar-fixed-bottom .bg-secondary">
      
      <div className="copyright-text">
        <p>© Feed The Beast 2018</p>
      </div>
      </footer>
    );
  }
}

const styles = {
  footerStyle: {
    padding: "10px",
    color: 'white',
    background: "grey"
    
  }
};

export default Footer;