import React from 'react';
import './Body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import images from '../../images.json';
import Header from '../navbar/Navbar';
import Instructions from '../instructions/Instructions';

class Body extends React.Component {
  state = {
    count: 0,
    score: 0,
    images: images,
    beenClicked: []
  };

  handleCount = (id) => {
    console.log(id)

    let beenClicked = [...this.state.beenClicked];

    if (beenClicked.indexOf(id) === -1) {
      beenClicked.push(id);
      this.setState({ count: this.state.count + 1, beenClicked });
    } else {
      console.log("game over");
      this.setState({ count: 0, beenClicked: [], score: this.state.score + 1 });
    }
    
  };

  render() {
    return (
      <div>
        <Header userScore={this.state.count} userTopScore={this.state.score}/>
        <Instructions />
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={8}>
              {
                this.state.images.map((image) =>
                  <Card
                    link={image.link}
                    id={image.id}
                    handleCount={this.handleCount}
                  />

                  /*     Card({
                        link: image.link,
                        id: image.id,
                        handleCount: this.handleCount              
                      }) */
                  //   <Image  src={image.link} thumbnail className="m-2" id={image.id} onClick={() => this.handleCount(image.id)}/// dataclicked={this.state.clicked.toString()} />
                )
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

function Card(props) {
  return (
    <Image src={props.link} thumbnail className="m-2" id={props.id} onClick={() => props.handleCount(props.id)} />
  )
}


export default Body;