import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (


    <>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/invoices">All Invoices</Nav.Link>
            <Nav.Link href="/todo">Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    

    </>

  );
}

export default Navigation;