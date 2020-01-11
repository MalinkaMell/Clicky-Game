import React from 'react'; //react
import './Body.css'; //body
import Container from 'react-bootstrap/Container'; //bootstrap container
import Row from 'react-bootstrap/Row'; //bootstrap row
import Col from 'react-bootstrap/Col'; //bootstrap cols
import Image from 'react-bootstrap/Image'; //bootstrap images
import images from '../../images.json'; //images json collection
import Instructions from '../instructions/Instructions'; //instructions

class Body extends React.Component {
  state = {
    count: 0, //count images
    score: 0, //highest score
    images, //so i can use images from state
    beenClicked: [], //array of clicked images IDs
    message: "Click an image to begin!", //message to user, empty for now
    shake: false //shaking the whole container if the guess is wrong
  };

  //handle count function aka what are we doin' on click
  //passing ID from image, so react knows on what image we are operating
  handleCount = (id) => {
    //if container is shaking do not accept any clicks
    if (this.state.shake) {
      return false;
    }

    //nice trick with spreading my array of clicked images instead of looping trough it
    let beenClicked = [...this.state.beenClicked];

    //here we are looking for that ID in the array, if it is not there, execute following
    if (beenClicked.indexOf(id) === -1) {
      beenClicked.push(id); //push image ID to the array

      if (this.state.count < this.state.score) {
        //if the count less than high score keep increasing the counter, not increasing the high score, giving guessed correctly messge and updating beenClicked array
        this.setState(
          {
            count: this.state.count + 1,
            beenClicked,
            message: "You guessed correctly!"
          }
        );
      } else {
        //same as above, but here we are incresing high score together with count
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
      //if image ID is in beenClicked array, means we already clicked it, so the game is over
      console.log("game over");
      //reseting the count, emptying beenClicked array, saving the high score, giving incorrect guess message and shaking
      this.setState({ count: 0, beenClicked: [], score: this.state.score, message: "You guessed incorrectly!", shake: true });
    }
  };

  render() {

    //define class for images container here, so i can manipulate it
    let rowClass = "d-flex justify-content-center text-center";
    //if state shake is equal to true, adding shake class to the container, shaking it for one second, 
    //setting shae state back to false, and removing the shake class
    if (this.state.shake) {
      rowClass += " shake";
      setTimeout(() => this.setState({ shake: false }), 1000)
    } else {
      rowClass = "d-flex justify-content-center text-center noshake";
    }

    return (
      <div className="mb-5 pb-5 pb-md-0">
        {/* passing message and scores as props to Instructions component */}
        <Instructions userScore={this.state.count} userTopScore={this.state.score} userMessage={this.state.message} />
        <Container>
          <Row className={rowClass}> {/* here using that dinamyc class */}
            <Col xs={12} md={8}>
              {
                /* shuffle images collection and after that nicely mapping trough the json collection and rendering our images */
                this.state.images
                  .sort(() => Math.random() - 0.5)
                  .map((image) =>
                    <Card
                      key={image.id}
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
//one image
function Card(props) {
  return (
    /* nicely grabbing image id and link from props, and and manipulating the click event with handleCount after passing it to calback function */
    <Image src={'images/' + props.link} thumbnail className="m-1 m-md-2 m-lg-3" id={props.id} onClick={() => props.handleCount(props.id)} />
  )
}


export default Body;