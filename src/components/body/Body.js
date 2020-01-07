import React from 'react';
import './Body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import images from '../../images.json';
import Instructions from '../instructions/Instructions';

class Body extends React.Component {
  state = {
    count: 0,
    score: 0,
    images: images,
    beenClicked: [],
    message: "",
    shake: false
  };

  handleCount = (id) => {

    console.log(id);

    let beenClicked = [...this.state.beenClicked];

    if (beenClicked.indexOf(id) === -1) {

      beenClicked.push(id);

      if (this.state.count < this.state.score) {
        this.setState(
          {
            count: this.state.count + 1,
            beenClicked,
            message: "You guessed correctly!"
          }
        );
      } else {
        this.setState(
          {
            count: this.state.count + 1,
            beenClicked,
            score: this.state.score + 1,
            message: "You guessed correctly!"
          }
        );
      }

    } else {
      console.log("game over");
      this.setState({ count: 0, beenClicked: [], score: this.state.score, message: "You guessed incorrectly!", shake: true });
    }

  };

  render() {

    let rowClass = "d-flex justify-content-center text-center";

    if (this.state.shake) {
      rowClass += " shake";
      setTimeout(() => this.setState({ shake: false }), 1000)
    } else {
      rowClass = "d-flex justify-content-center text-center noshake";
    }

    return (
      <div>
        <Instructions userScore={this.state.count} userTopScore={this.state.score} userMessage={this.state.message} />
        <Container>
          <Row className={rowClass}>
            <Col xs={12} md={8}>
              {
                this.state.images
                  .sort(() => Math.random() - 0.5)
                  .map((image) =>
                    <Card
                      link={image.link}
                      id={image.id}
                      handleCount={this.handleCount}
                    />
                  )
              }
            </Col>
          </Row>
        </Container>
      </div >
    );
  };
}

function Card(props) {
  return (
    <Image src={'images/' + props.link} thumbnail className="m-1 m-md-2 m-lg-3" id={props.id} onClick={() => props.handleCount(props.id)} />
  )
}


export default Body;