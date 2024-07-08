import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import bjsvg from "../../assets/images/footerImages/Blackjack.Svg.png";
import './Footer.css';

function FooterCardImage() {
  return (
    <Container id="footer-img-container">
        <Col xs={6} md={4} style={{ display: 'inline' }}>
          <Image src={bjsvg} rounded id="footer-img-styling"/>
        </Col>
    </Container>
  );
}

export default FooterCardImage;