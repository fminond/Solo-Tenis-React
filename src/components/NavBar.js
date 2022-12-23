import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo-solo-tenis.jpg';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import { NavLink } from 'react-bootstrap';


function NavbarComponent() {
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
                  <Link to="/"> <Nav.Link href="#onlytennis">Only Tennis </Nav.Link></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Link to="/">
                    <Nav.Link href="#home">Home </Nav.Link>
                  </Link>

                  <Link to="/category/raquets"><Nav.Link href="#raquets">Raquets </Nav.Link></Link>
                  <Link to="/category/balls"><Nav.Link href="#balls">Balls </Nav.Link></Link>
                  <NavDropdown
                    title="Clothes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* Navigation on NavBarDropdown Clothes*/}
                    <Link to="/category/shorts"><NavDropdown.Item href="#shorts">
                      Shorts</NavDropdown.Item> </Link>
                    <Link to="/category/tShirts"><NavDropdown.Item href="#t-shirts">
                      T-shirts</NavDropdown.Item> </Link>
                    <Link to="/category/socks"><NavDropdown.Item href="#socks">
                      Socks </NavDropdown.Item></Link>
                  </NavDropdown>
                  <Link to="/cart">
                    <NavLink><CartWidget></CartWidget></NavLink>
                  </Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;