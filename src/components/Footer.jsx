import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Quick Links */}
          <Col md={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-light">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: selvamstores24@gmail.com</p>
            <p>Phone: +91 98945 74934</p>
            <p>Address: 201 Pattali Street, Idumban Kovil Itteri Rd, opp. Eswarapatta Kovil, South Anna Nagar, Palani, Tamil Nadu 624601</p>
          </Col>
        </Row>

        <hr className="border-top border-light" />
        
        <Row className="text-center">
          <Col>
            <p>&copy; {new Date().getFullYear()} Hotel Booking. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
