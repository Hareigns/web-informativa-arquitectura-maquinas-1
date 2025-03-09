import { Container } from "react-bootstrap";
import '../assets/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center py-1">
      <Container>
        <p>&copy; {currentYear} Arquitecturas de Máquinas. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;