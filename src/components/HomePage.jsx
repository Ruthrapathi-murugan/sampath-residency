import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row 
        className="text-center" 
        style={{
          backgroundImage: "url('/images/PHOTO-2024-07-08-12-18-39 (6).jpg')", // Add 'url()' around the image path
          backgroundSize: "cover",
          backgroundPosition: "centea",
          height: "70vh", // Full screen height
          color: "#fff", // Text color for contrast
          display: "flex", // Enable flexbox for centering
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
      >
        <Col>
          <h1>Welcome to Hotel Sampath Residency</h1>
          <h5>Enjoy the best luxury experience with us.</h5>
          
          {/* Use Link for navigation inside React */}
          <Button variant="primary" as={Link} to="/rooms">Book a Room</Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/PHOTO-2024-07-08-12-18-39 (6).jpg" />
            <Card.Body>
              <Card.Title>Luxury Rooms</Card.Title>
              <Card.Text>
                Stay in our luxury rooms with world-class amenities.
              </Card.Text>
              
              {/* Use Link for navigation */}
              <Button variant="primary" as={Link} to="/rooms">View Rooms</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/PHOTO-2024-07-08-12-18-39 (7).jpg" />
            <Card.Body>
              <Card.Title>Exclusive Offers</Card.Title>
              <Card.Text>
                Get exclusive discounts and offers for your stay.
              </Card.Text>
              
              {/* Use Link for navigation */}
              <Button variant="primary" as={Link} to="/offers">View Offers</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/PHOTO-2024-07-08-12-18-39 (7).jpg" />
            <Card.Body>
              <Card.Title>Dining & Services</Card.Title>
              <Card.Text>
                Experience the finest dining and hospitality services.
              </Card.Text>
              
              {/* Use Link for navigation */}
              <Button variant="primary" as={Link} to="/services">View Services</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
