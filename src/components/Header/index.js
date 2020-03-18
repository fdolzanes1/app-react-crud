import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Navbar.Brand href="#">Contacts</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">React + NodeJS</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;