import { Container } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Sobre Nosotros</Card.Title>
          <Card.Text>
            Somos un equipo de dos apasionados estudiantes de la Universidad Nacional de Ingeniería (UNI), actualmente cursando la asignatura de Arquitectura de Máquinas I. Este proyecto nace como parte de nuestro trabajo de fin de curso, con el objetivo principal de compartir y difundir el conocimiento que hemos adquirido a lo largo de las clases teóricas y prácticas.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>¿Por qué lo hacemos?</Card.Title>
          <Card.Text>
            La Arquitectura de Máquinas es una disciplina fundamental en el campo de la ingeniería de sistemas y computación. A través de este proyecto, buscamos:

            Organizar y sintetizar la información recopilada en clases y laboratorios.

            Compartir conocimiento de manera didáctica y comprensible.

            Fomentar el aprendizaje colaborativo, invitando a otros estudiantes a contribuir y enriquecer este espacio.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;