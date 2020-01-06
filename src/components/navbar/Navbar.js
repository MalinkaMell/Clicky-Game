import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Navbar.css';

const Header = (props) => {
  return (
    <Navbar variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="index.html" className="font">
          Clicky Game
        </Navbar.Brand>
        <Navbar.Text>{props.userMessage || "Click an image to begin!"}</Navbar.Text>
        <Navbar.Text>Score: {props.userScore || 0} | Top Score: {props.userTopScore || 0}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;


