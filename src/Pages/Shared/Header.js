import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
 
    return (<div  
      data-aos="fade-down" 
    data-aos-easing="linear"
    data-aos-duration="1500" 
      className="shadow-xl">
        <Navbar  collapseOnSelect expand="lg" >
  <Container>
  <NavLink
  className={({ isActive }) =>
  isActive ? " m-2 font-bold text-2xl text-amber-200 text-decoration-none rounded hover:text-amber-200 border-amber-200 border-b-2" : "m-2 font-bold text-2xl text-amber-200 text-decoration-none rounded hover:text-amber-200 "
}
 as={Link} to="/" > Arif Islam</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto text-lg font-bold ">
           <NavLink 
            className={({ isActive }) =>
            isActive ? " m-2 text-teal-300 text-decoration-none rounded hover:text-teal-300 border-teal-300 border-b-2" : "text-white m-2 text-decoration-none rounded"
          }
          as={Link} to="projects">Projects</NavLink>
           <NavLink
           className={({ isActive }) =>
           isActive ? " m-2 text-teal-300 text-decoration-none rounded hover:text-teal-300 border-teal-300 border-b-2" : "text-white m-2 text-decoration-none rounded"
         }
           as={Link} to="about">About</NavLink>
           <NavLink
           className={({ isActive }) =>
           isActive ? " m-2 text-teal-300 text-decoration-none rounded hover:text-teal-300 border-teal-300 border-b-2" : "text-white m-2 text-decoration-none rounded"
         }
         as={Link} to="blog">Blogs</NavLink>
           <NavLink
           className={({ isActive }) =>
           isActive ? " m-2 text-teal-300 text-decoration-none rounded hover:text-teal-300 border-teal-300 border-b-2" : "text-white m-2 text-decoration-none rounded"
         }
          as={Link} to="contact">Contact Me</NavLink>
    </Nav>
    <Nav>
<a className="rounded bg-teal-800 hover:bg-teal-500  px-2 py-2 text-white  font-bold text-decoration-none"href="https://drive.google.com/file/d/1We2WR1z1hHQodKQux-zT4kotj8H_5pj4/view?usp=sharing">Resume</a>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
};

export default Header;