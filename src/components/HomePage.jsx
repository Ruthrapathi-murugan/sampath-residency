import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <Row
        className="text-center"
        style={{
          backgroundImage: "url('/images/PHOTO-2024-07-08-12-18-39 (6).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: 'relative',
        }}
      >
        <Col style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}> {/* Semi-transparent overlay */}
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to Hotel Sampath Residency</h1>
          <h5>Enjoy the best luxury experience with us.</h5>
          <Button variant="primary" as={Link} to="/rooms" size="lg" className="mt-3">Book a Room</Button>
        </Col>
      </Row>

      {/* About Section */}
      <Row style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
        <Col style={{ maxWidth: '800px', margin: '0 auto' }}>
          <center>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>About Sampath Residency</h1>
          </center>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', textAlign: 'justify', marginTop: '20px' }}>
            Sampath Residency is the first budget luxury hotel in Palani. Centrally located near the Rope Car station and close to Main Temple Car parking, 
            it is about 1 km from Palani Bus Stand and 2 km from the Palani Railway Station. This location signifies convenience and comfort for pilgrims, 
            making it ideal for those who wish to visit the temple often during their stay.
          </p>
        </Col>
      </Row>

      {/* Rooms Section */}
      <Row style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
        <Col style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>Our Rooms</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', textAlign: 'justify', marginTop: '20px' }}>
            There are 28 rooms in 8 categories, all of which are air-conditioned and feature a flat-screen television, 
            24-hour running water with hot water facilities, an in-house vegetarian restaurant, and 24-hour room service. 
            All rooms have either a Hill Temple view or an Idumban Temple view, providing an experience like never before. 
            The hotel features a beautifully landscaped area, with some rooms having balconies that face Palani Hill, making them ideal for families with children.
          </p>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm" style={{ transition: 'transform 0.3s ease-in-out' }}>
            <Card.Img variant="top" src="/images/PHOTO-2024-07-08-12-18-39 (6).jpg" />
            <Card.Body>
              <Card.Title>Luxury Rooms</Card.Title>
              <Card.Text>
                Stay in our luxury rooms with world-class amenities.
              </Card.Text>
              <Button variant="primary" as={Link} to="/rooms">View Rooms</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm" style={{ transition: 'transform 0.3s ease-in-out' }}>
            <Card.Img variant="top" src="/images/PHOTO-2024-07-08-12-18-39 (7).jpg" />
            <Card.Body>
              <Card.Title>Exclusive Offers</Card.Title>
              <Card.Text>
                Get exclusive discounts and offers for your stay.
              </Card.Text>
              <Button variant="primary" as={Link} to="/offers">View Offers</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm" style={{ transition: 'transform 0.3s ease-in-out' }}>
            <Card.Img variant="top" src="/images/PHOTO-2024-07-08-12-18-39 (7).jpg" />
            <Card.Body>
              <Card.Title>Dining & Services</Card.Title>
              <Card.Text>
                Experience the finest dining and hospitality services.
              </Card.Text>
              <Button variant="primary" as={Link} to="/services">View Services</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
