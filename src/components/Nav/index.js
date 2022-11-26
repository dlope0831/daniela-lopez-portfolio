import React from "react";
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';

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
          <Nav.Link eventKey="link-2">Contact Me</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navbar;