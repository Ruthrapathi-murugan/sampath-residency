import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>About Us</h1>
          <p className="lead">Learn more about our journey and what we offer.</p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6}>
          <Image src="/images/hotel-interior.jpg" fluid />
        </Col>
        <Col md={6}>
          <h3>Our Story</h3>
          <p>
            Established in 2020, our hotel offers world-class amenities and top-tier hospitality services.
            Whether you’re here for business or pleasure, we strive to make your stay memorable. Our hotel
            is located in the heart of Palani, offering convenient access to local attractions.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>
            To provide a luxurious and comfortable stay that exceeds your expectations.
            We focus on customer satisfaction, offering personalized services and exclusive offers.
          </p>
        </Col>
        <Col md={6}>
          <Image src="/images/luxury-room.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
