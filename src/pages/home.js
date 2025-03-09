import { Container } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Bienvenido a Arquitecturas de Máquinas</Card.Title>
          <Card.Text>
            Explora las diferentes arquitecturas de computadoras y su evolución.
          </Card.Text>
        </Card.Body>
      </Card>
      
    </Container>
  );
};

export default Home;