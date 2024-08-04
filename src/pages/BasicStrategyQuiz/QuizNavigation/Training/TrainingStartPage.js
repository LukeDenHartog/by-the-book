import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainingStartPage.css';
import NavbarModule from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer.js';
import OptionsHomeButton from '../../../../components/Buttons/OptionsHomeButton.js';
import BasicStratHomeButton from '../../../../components/Buttons/BasicStratHomeButton.js';

function HeaderAndFooterExample() {
  return (
    <main>
        <NavbarModule />
        <Container>
            <Row>
                <Col className="flexbox-container" lg={3} md={12} sm={12} >
                <Card className="text-center bg-dark text-white">
                    <Card.Header>Training Module 1</Card.Header>
                    <Card.Body className="card-body">
                    <Card.Title>Soft Totals</Card.Title>
                    <Card.Text>
                        Soft totals involve a hand that includes an Ace counted as 11, offering flexibility as the Ace can be valued as 1 if needed to avoid busting.
                    </Card.Text>
                    <Button variant="primary">Play Now</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                </Col>
                <Col className="flexbox-container" lg={3} md={12} sm={12} >
                <Card className="text-center bg-dark text-white">
                    <Card.Header>Training Module 2</Card.Header>
                    <Card.Body className="card-body">
                    <Card.Title>Hard Totals</Card.Title>
                    <Card.Text>
                        Hard totals refer to the sum of a player's cards without an Ace being counted as 11, meaning the hand has a fixed value that can't be adjusted.
                    </Card.Text>
                    <Button variant="primary">Play Now</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                </Col>
                <Col className="flexbox-container" lg={3} md={12} sm={12}>
                <Card className="text-center bg-dark text-white">
                    <Card.Header>Training Module 3</Card.Header>
                    <Card.Body className="card-body">
                    <Card.Title>Splitting Pairs</Card.Title>
                    <Card.Text>
                        Splitting pairs allows a player to separate two cards of the same value into two hands, each with its own bet, to potentially increase their chances of winning.
                    </Card.Text>
                    <Button variant="primary">Play Now</Button>
                    </Card.Body>
                    <Card.Footer className="">2 days ago</Card.Footer>
                </Card>
                </Col>
            </Row>
        </Container>
        <div className="bottom-buttons-flexbox"> 
            <OptionsHomeButton />
            <BasicStratHomeButton /> 
         </div>
        <Footer />
    </main>
  );
}

export default HeaderAndFooterExample;
