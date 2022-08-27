import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
const Header = () => {
  const props = useSpring({ to: { opacity: 1 }, config: { duration: 2000 }, from: { opacity: 0 } })
    return (<animated.div style={props} className="shadow-xl">
        <Navbar collapseOnSelect expand="lg" bg="bg-slate-900" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className="text-2xl font-bold "> Arif Islam</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto font-bold ">
           <Nav.Link as={Link} to="projects">Projects</Nav.Link>
           <Nav.Link as={Link} to="about">About</Nav.Link>
           <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
           <Nav.Link as={Link} to="contact">Contact Me</Nav.Link>
    </Nav>
    <Nav>
      <Button className="btn btn-outline btn-warning-content"><a className="text-white font-bold text-decoration-none"href="https://drive.google.com/file/d/1We2WR1z1hHQodKQux-zT4kotj8H_5pj4/view?usp=sharing">Resume</a></Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</animated.div>
    );
};

export default Header;