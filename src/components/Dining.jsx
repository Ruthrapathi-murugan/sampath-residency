import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dining = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">Dining at Our Hotel</h2>

      {/* Section: Dining Options */}
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/gourmet-room.jpg" />
            <Card.Body>
              <Card.Title>The Gourmet Room</Card.Title>
              <Card.Text>
                Enjoy an extensive menu featuring local and international cuisines. Perfect for breakfast, lunch, and dinner.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/alfresco-terrace.jpg" />
            <Card.Body>
              <Card.Title>Alfresco Terrace</Card.Title>
              <Card.Text>
                Dine under the stars with panoramic views, offering an array of grilled specialties. Ideal for romantic dinners.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/cafe-lounge.jpg" />
            <Card.Body>
              <Card.Title>The Café Lounge</Card.Title>
              <Card.Text>
                A cozy spot for a coffee break, featuring freshly brewed coffees, teas, pastries, and light snacks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section: Signature Dishes */}
      <Row className="mt-5">
        <Col>
          <h3 className="text-center mb-4">Signature Dishes</h3>
          <p className="text-center">
            Our culinary team takes pride in offering local specialties and chef's signature creations.
          </p>
        </Col>
      </Row>

      {/* Section: In-Room Dining */}
      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/in-room-dining.jpg" />
            <Card.Body>
              <Card.Title>In-Room Dining</Card.Title>
              <Card.Text>
                For your convenience, enjoy 24/7 in-room dining service with a selection of menu items delivered to your room.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/private-dining.jpg" />
            <Card.Body>
              <Card.Title>Private Dining & Events</Card.Title>
              <Card.Text>
                We offer private dining and event catering with customized menus for memorable occasions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dining;
