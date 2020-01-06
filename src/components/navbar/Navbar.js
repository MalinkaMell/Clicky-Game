import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="index.html">
          Clicky Game
        </Navbar.Brand>
        <Navbar.Text>Click an image to begin!</Navbar.Text>
        <Navbar.Text>Score: {props.userScore || 0} | Top Score: {props.userTopScore || 0}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;


