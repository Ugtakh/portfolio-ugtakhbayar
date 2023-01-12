import React from "react";
import { motion } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarMenu = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <Navbar
          style={{ zIndex: 1000 }}
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">MY-PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>
    </div>
  );
};

export default NavbarMenu;
