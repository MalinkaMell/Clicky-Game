import React from 'react';
import { Container } from 'react-bootstrap';

const Instructions = () => {
  return (
      <Container fluid className="m-0 text-center bg-light p-2">
        <h5>Clicky Game!</h5>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </Container>
  );
}

export default Instructions;