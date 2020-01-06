import React from 'react';
import { Container } from 'react-bootstrap';

const Instructions = () => {
  return (
      <Container fluid className="m-0 text-center p-2">
        <h3 className="font">Clicky Game!</h3>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
      </Container>
  );
}

export default Instructions;