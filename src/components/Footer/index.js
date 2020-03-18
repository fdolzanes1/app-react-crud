import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      
      <Navbar bg="dark" variant="dark" className="fixed-bottom">
        <Navbar.Brand>Fabiano Dolzanes</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;