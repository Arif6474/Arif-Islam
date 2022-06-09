import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"> Arif Islam</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
           <Nav.Link as={Link} to="projects">Projects</Nav.Link>
           <Nav.Link as={Link} to="about">About</Nav.Link>
    </Nav>
    <Nav>
      <Button className="btn btn-primary text-white"><a className="text-white text-decoration-none"href="https://drive.google.com/file/d/1SB9JUxvGnpWgdAqmJXzegAxN3O8sTCzU/view?fbclid=IwAR38fG9WxM6g_qkRcVFlBj8NiJ3FAfKOUnXWq416nsibjsUbZDqiYlsvaXY">Resume</a></Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;