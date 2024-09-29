import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>About Us</h1>
          <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
            Discover our story, values, and what we stand for.
          </p>
        </Col>
      </Row>

      {/* Story Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          {/* Replace with an original image related to your hotel interior */}
          <Image src="/images/hotel-interior.jpg" fluid style={{ borderRadius: '10px' }} />
        </Col>
        <Col md={6}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Our Story</h3>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', textAlign: 'justify' }}>
            Established in 2020, Sampath Residency aims to offer world-class amenities with personalized
            hospitality services. Located in the heart of Palani, we provide guests with luxurious experiences
            while maintaining the comfort and warmth of a homely environment. We are a sanctuary for both business 
            and leisure travelers, ensuring that every stay is memorable.
          </p>
        </Col>
      </Row>

      {/* Vision Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2">
          {/* Replace with an original image showcasing a luxury room */}
          <Image src="/images/luxury-room.jpg" fluid style={{ borderRadius: '10px' }} />
        </Col>
        <Col md={6} className="order-md-1">
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Our Vision</h3>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', textAlign: 'justify' }}>
            At Sampath Residency, our vision is to become the epitome of luxury and comfort in Palani. 
            We continuously strive to exceed guest expectations by providing unmatched services and amenities.
            Whether you're visiting for spiritual reasons or a family getaway, our goal is to provide you with 
            a seamless and unforgettable experience.
          </p>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          {/* Replace with an original image that highlights hospitality */}
          <Image src="/images/hotel-service.jpg" fluid style={{ borderRadius: '10px' }} />
        </Col>
        <Col md={6}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Our Mission</h3>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', textAlign: 'justify' }}>
            Our mission is to offer our guests an exceptional stay where comfort, luxury, and hospitality 
            merge. We believe in creating personalized experiences, tailored to your specific needs, ensuring 
            that every detail is attended to. We prioritize our guests' comfort and happiness above all else.
          </p>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Why Choose Us</h3>
          <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
            <li>Prime location near the Palani Temple and major attractions</li>
            <li>Affordable luxury with unparalleled amenities</li>
            <li>24/7 room service and in-house vegetarian restaurant</li>
            <li>Beautiful views of the Hill Temple or Idumban Temple from every room</li>
            <li>Family-friendly rooms with balconies overlooking Palani Hill</li>
          </ul>
        </Col>
        <Col md={6}>
          {/* Replace with an original image related to hotel amenities */}
          <Image src="/images/amenities.jpg" fluid style={{ borderRadius: '10px' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
