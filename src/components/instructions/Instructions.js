import React from 'react';
import './Instructions.css';
import { Container } from 'react-bootstrap';

const Instructions = (props) => {
  let userMsg = "someclass";
  if (props.userMessage === "You guessed incorrectly!") {
    userMsg += " text-danger"
  }
  return (
      <Container fluid className="m-0 text-center p-2">
        <h2 className="mt-2 font text-uppercase font-weight-bold instructions">Clicky Game!</h2>
        <p className="text-dark">Click on an image to earn points, but don't click on any more than once!</p>
        <h5 className={userMsg}>{props.userMessage || "Click an image to begin!"}</h5>
        <h6>Score: {props.userScore || 0} | Top Score: {props.userTopScore || 0}</h6>
      </Container>
  );
}

export default Instructions;