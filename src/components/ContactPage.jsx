import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Contact Us</h1>
          <p className="lead">We would love to hear from you! Fill out the form below to get in touch.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h3>Get in Touch</h3>
          <p>Email: sampathresidency@gmail.com</p>
          <p>Phone: +91 98945 74934</p>
          <p>Address: 201 Pattali Street, Idumban Kovil Itteri Rd, South Anna Nagar, Palani, Tamil Nadu 624601</p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
