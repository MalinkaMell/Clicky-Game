import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          Clicky Game
        </Navbar.Brand>
        <Navbar.Text>Click an image to begin!</Navbar.Text>
        <Navbar.Text>Score: 0 | Top Score: 0</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;


