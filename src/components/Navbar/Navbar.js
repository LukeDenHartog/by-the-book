import './Navbar.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import downArrowImg from './down-arrow-image.png';

function NavbarModule() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  // If showOffCanvas changes, the handleResize function is updated.
  const handleResize = useCallback(() => {
    if (window.innerWidth > 992 && showOffCanvas) {
      setShowOffCanvas(false);
    }
  }, [showOffCanvas]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
      // The cleanup function is for preventing memory leaks and avoiding multiple event listeners being attached if the effect re-runs.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const handleShowOffCanvas = () => setShowOffCanvas(true);
  const handleCloseOffCanvas = () => setShowOffCanvas(false);

  return (
    <Navbar expand="lg" className="mb-3 nav-background">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
          <h2 className="brand-name-color">By the Book</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShowOffCanvas} />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          show={showOffCanvas}
          onHide={handleCloseOffCanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <h2 className="brand-name-color">By the Book</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav className="off-canvas-styling">
                <NavDropdown title={<><h5>Black Jack (21)</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                  <Link to="/basic-rules">
                    <NavDropdown.Item href="#action/3.1">Basic Rules</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/">
                    <NavDropdown.Item href="#action/3.2">Basic Strategy</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/">
                    <NavDropdown.Item href="#action/3.4">Counting Cards</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
              <Nav className="off-canvas-styling">
                <NavDropdown title={<><h5>Gambling Advice</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                  <Link to="/betting-advice">
                    <NavDropdown.Item href="#action/3.1">Sports Betting</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Blackjack Betting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Link to="/addiction-help">
                    <NavDropdown.Item href="#action/3.3">Support for Gambling Addiction</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
            </Nav>
            <Nav className="off-canvas-styling">
              <NavDropdown title={<><h5>About us</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">About By the Book</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">My GitHub Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="off-canvas-styling" id="last-nav-element">
              <NavDropdown title={<><h5>Account</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Sign out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarModule;
