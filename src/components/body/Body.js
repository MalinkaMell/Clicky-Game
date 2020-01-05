import React from 'react';
import './Body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Body = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={8}>
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
          <Image src="https://via.placeholder.com/150" thumbnail className="m-2" />
        </Col>
      </Row>
    </Container>
  );
}

export default Body;