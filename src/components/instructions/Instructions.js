import React from 'react'; //react
import './Instructions.css'; //css
import { Container } from 'react-bootstrap'; //bootstrap

const Instructions = (props) => {
  let userMsg = "h5"; //assign placeholder class so i can add more classes to it later
  if (props.userMessage === "You guessed incorrectly!") {
    userMsg += " text-danger" //make text red when clicked wrong
  }
  return (
      <Container fluid className="m-0 text-center p-2">
        <h2 className="mt-2 font text-uppercase font-weight-bold instructions">Clicky Game!</h2>
        <p className="text-dark">Click on an image to earn points, but don't click on any more than once!</p>
        <h5 className={userMsg}>{props.userMessage}</h5> {/* show message from props  */}
        <h6>Score: {props.userScore || 0} | Top Score: {props.userTopScore || 0}</h6> {/* show current user score and high score */}
      </Container>
  );
}

export default Instructions;