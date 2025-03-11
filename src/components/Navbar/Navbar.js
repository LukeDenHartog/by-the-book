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
      <Navbar.Brand as={Link} to="/">
          <h2 className="brand-name-color">By the Book</h2>
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
                  <NavDropdown.Item as={Link} to='/basic-rules'>Basic Rules</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/">Basic Strategy</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/">Counting Cards</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="off-canvas-styling">
                <NavDropdown title={<><h5>Gambling Advice</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/betting-advice">Sports Betting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Blackjack Betting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="addiction-help">Support for Gambling Addiction</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
            <Nav className="off-canvas-styling">
              <NavDropdown title={<><h5>About us</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                <NavDropdown.Item>News</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>About By the Book</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>My GitHub Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="off-canvas-styling" id="last-nav-element">
              <NavDropdown title={<><h5>Account</h5><img src={downArrowImg} alt="Down Arrow" className="down-arrow" /></>} id="collapsible-nav-dropdown">
                <NavDropdown.Item>Log in</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Sign out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarModule;