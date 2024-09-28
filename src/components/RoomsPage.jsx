import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const RoomsPage = () => {
  const rooms = [
    {
      title: 'Deluxe Double  Room',
      description: 'Spacious room with king-size bed, balcony view, and premium amenities.',
      image: '/images/2bed (2).jpg',
      price: '₹1600/night'
    },
    {
      title: 'Triple Bed Room',
      description: 'Luxury suite with separate living area, Jacuzzi, and exclusive offers.',
      image: '/images/3bed.jpg',
      price: '₹1800/night'
    },
    {
      title: 'Four Bed Room',
      description: 'Comfortable room with all basic amenities, ideal for business trips.',
      image: '/images/4bed (2).jpg',
      price: '₹2000/night'
    },
    {
      title: 'Five Bed Room',
      description: 'Comfortable room with all basic amenities, ideal for business trips.',
      image: '/images/5bed (2).jpg',
      price: '₹2200/night'
    },
  ];

  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Our Rooms</h1>
          <p className="lead">Choose from our range of luxurious and comfortable rooms.</p>
        </Col>
      </Row>

      <Row>
        {rooms.map((room, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={room.image} />
              <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <p className="font-weight-bold">{room.price}</p>
                <Button variant="primary" href="/booking">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RoomsPage;
