import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AppLogo from "../assets/images/logoApp.webp"
import "../assets/styles/header.css"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">

          <img

            src={AppLogo} // Usa la variable de la imagen importada

            alt="Logo"

            width="50px" // Ajusta el tamaño según sea necesario

            height="50px" // Ajusta el tamaño según sea necesario

            className="d-inline-block align-left"

          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;