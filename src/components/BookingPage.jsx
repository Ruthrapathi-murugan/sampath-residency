import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BookingPage = () => {
  const location = useLocation();
  const { room } = location.state || {};

  // Get today's date in the format required for the input field (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  if (!room) {
    return (
      <Container className="text-center my-5">
        <h2>No room selected!</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Booking for {room.title}</h2>
          <Row>
            <Col md={6}>
              <Card>
                <Carousel showThumbs={false} infiniteLoop autoPlay>
                  {room.images.map((image, idx) => (
                    <div key={idx}>
                      <img src={image} alt={`${room.title} ${idx + 1}`} />
                    </div>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{room.title}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                  <p className="font-weight-bold">Price: {room.price}</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <h4>Fill Your Details</h4>
              <Form>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="mobile" className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    pattern="[0-9]{10}"
                  />
                  <Form.Text className="text-muted">
                    Please enter a valid 10-digit mobile number.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="checkin" className="mb-3">
                  <Form.Label>Check-in Date</Form.Label>
                  <Form.Control type="date" required min={today} />
                </Form.Group>

                <Form.Group controlId="checkout" className="mb-3">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control type="date" required min={today} />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Confirm Booking
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
