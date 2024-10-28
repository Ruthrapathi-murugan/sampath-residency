import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dining = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">Dining at Our Hotel</h2>

      {/* Section: In-Room Dining Service */}
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/in-room-dining.jpg" />
            <Card.Body>
              <Card.Title>In-Room Dining</Card.Title>
              <Card.Text>
                Our unique dining experience brings the flavors of the local restaurant scene straight to your room.
                We partner with selected outside restaurants to provide a variety of meal options, delivered fresh and served for your comfort.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Information */}
      <Row className="mt-4">
        <Col className="text-center">
          <p>
            Whether you're craving a local specialty or an international dish, our service allows you to enjoy restaurant-quality meals without leaving the comfort of your room.
            Let us handle the arrangements while you relax and dine in privacy.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dining;
