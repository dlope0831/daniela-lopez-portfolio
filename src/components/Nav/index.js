import React from "react";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
      <Nav className="justify-content-center"  defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="#about">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#projects">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navbar;