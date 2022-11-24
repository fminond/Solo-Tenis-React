import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo-solo-tenis.jpg';
import {Link} from "react-router-dom";


function NavBar() {
  return (
        <>
          {[false].map((expand) => (
           <Navbar bg="dark" variant="dark">
           <Container>
             <Navbar.Brand href="#home">
               <img
                 alt=""
                 src={logo}
                 width="30"
                 height="30"
                 className="d-inline-block align-top"
               />{' '}
              Only Tennis
             </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Link to="/"> Only Tennis </Link>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/"><Nav.Link href="#home">Home </Nav.Link></Link>
        
                    <Link to="/category/123"><Nav.Link href="#raquets">Raquets </Nav.Link></Link>
                      <NavDropdown
                        title="Clothes"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">T-shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Shorts
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                         Socks
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
    }

export default NavBar;