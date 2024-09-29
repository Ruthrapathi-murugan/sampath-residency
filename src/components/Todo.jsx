import React from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';

const Todo = () => {
  return (
    <Container className="mt-5">
      {/* Section: Pooja Timings */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Pooja Timings</h2>
          <Table striped bordered hover responsive className="mt-3">
            <thead className="thead-dark">
              <tr>
                <th>Pooja Name</th>
                <th>Pooja Time</th>
                <th>Alangaram Name</th>
                <th>Entry Fee (Normal Day)</th>
                <th>Entry Fee (Special Day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vishwarubha Dharsanam</td>
                <td>05.40 AM</td>
                <td>Vishwarubham</td>
                <td>Rs.100</td>
                <td>Rs.200</td>
              </tr>
              <tr>
                <td>Vilaa Pooja</td>
                <td>06.40 AM</td>
                <td>Sanniyasi Alangaram</td>
                <td>Rs.150</td>
                <td>Rs.300</td>
              </tr>
              <tr>
                <td>Siru Kall Pooja</td>
                <td>08.00 AM</td>
                <td>Vedan Alangaram</td>
                <td>Rs.150</td>
                <td>Rs.300</td>
              </tr>
              <tr>
                <td>Kaala Santhi Pooja</td>
                <td>09.00 AM</td>
                <td>Balasubramaniar Alangaram</td>
                <td>Rs.150</td>
                <td>Rs.300</td>
              </tr>
              <tr>
                <td>Utchi Kaala Pooja</td>
                <td>12.00 PM</td>
                <td>Vaitheekal Alangaram</td>
                <td>Rs.150</td>
                <td>Rs.300</td>
              </tr>
              <tr>
                <td>Sayaraksha Pooja</td>
                <td>05.30 PM</td>
                <td>Raja Alangaram</td>
                <td>Rs.150</td>
                <td>Rs.300</td>
              </tr>
              <tr>
                <td>Iraakkaala Pooja</td>
                <td>08.00 PM</td>
                <td>Pushpa Alangaram</td>
                <td>Rs.150</td>
                <td>Rs.300</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Section: Festivals */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Festivals</h2>
          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/kandhar-shasti.jpg" />
            <Card.Body>
              <Card.Title>Kandhar Shasti (Soora Samharam)</Card.Title>
              <Card.Text>
                This is a significant festival at Palani, celebrated over 6 days in the month of Aippasi.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/thirukarthigai.jpg" />
            <Card.Body>
              <Card.Title>Thirukarthigai</Card.Title>
              <Card.Text>
                Celebrated for 10 days in the Tamil month of Karthigai.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/thai-poosam.jpg" />
            <Card.Body>
              <Card.Title>Thai Poosam</Card.Title>
              <Card.Text>
                A very important festival associated with the pilgrimage to Palani.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/panguni-uthiram.jpg" />
            <Card.Body>
              <Card.Title>Panguni Uthiram</Card.Title>
              <Card.Text>
                This 10-day festival includes rural dances and kavadi, carried by devotees.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/chariot-procession.jpg" />
            <Card.Body>
              <Card.Title>Chariot Procession</Card.Title>
              <Card.Text>
                The Golden Chariot Procession happens daily at 7 PM, with a participation fee.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section: Places Around Palani */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Places Around Palani</h2>
          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/varathamanathi-dam.jpg" />
            <Card.Body>
              <Card.Title>Varathamanathi Dam</Card.Title>
              <Card.Text>
                11 km from Palani, this dam is a popular picnic spot.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/palar-dam.jpg" />
            <Card.Body>
              <Card.Title>Palar Porundalar Dam</Card.Title>
              <Card.Text>
                Located 10 km from Palani, this dam is significant for irrigation.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Img variant="top" src="https://example.com/aivar-malai.jpg" />
            <Card.Body>
              <Card.Title>Aivar Malai</Card.Title>
              <Card.Text>
                12 km from Palani, known for its natural cavern and Jain sculptures.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
