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
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#contactMe">Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navbar;