import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const RoomsPage = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      title: 'Deluxe Double Room',
      description: 'Spacious room with king-size bed, balcony view, and premium amenities.',
      images: ['/images/2bed (2).jpg', '/images/2bed (3).jpg', '/images/2bed (4).jpg'],
      price: '₹1600/night'
    },
    {
      title: 'Triple Bed Room',
      description: 'Luxury suite with separate living area, Jacuzzi, and exclusive offers.',
      images: ['/images/3bed.jpg', '/images/PHOTO-2024-07-08-12-18-39 (7).jpg', '/images/3bed.jpg'],
      price: '₹1800/night'
    },
    {
      title: 'Four Bed Room',
      description: 'Comfortable room with all basic amenities, ideal for business trips.',
      images: ['/images/4bed (2).jpg', '/images/5bed (3).jpg', '/images/4bed (2).jpg'],
      price: '₹2000/night'
    },
    {
      title: 'Five Bed Room',
      description: 'Comfortable room with all basic amenities, ideal for business trips.',
      images: ['/images/5bed (2).jpg', '/images/5bed (3).jpg', '/images/5bed (2).jpg'],
      price: '₹2200/night'
    },
  ];

  const handleBooking = (room) => {
    // Pass room data to booking page
    navigate('/booking', { state: { room } });
  };

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
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                {room.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={`${room.title} ${idx + 1}`} />
                  </div>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <p className="font-weight-bold">{room.price}</p>
                <Button variant="primary" onClick={() => handleBooking(room)}>Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RoomsPage;
