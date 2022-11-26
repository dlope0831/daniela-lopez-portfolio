import React from "react";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Call me, beep me</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3">The History</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navbar;