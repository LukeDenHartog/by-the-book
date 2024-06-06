import "./Menubar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menubar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">By the Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Blackjack (21)" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Basic Rules </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Basic Strategy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Counting Cards
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gambling Advice" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Betting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sports
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Support for Gambling Addiction</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <NavDropdown title="About" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                About By the Book
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                My github profile
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sign out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;