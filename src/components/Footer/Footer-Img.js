import './Footer.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import bjsvgImg from "../../assets/images/footerImages/Blackjack.Svg.png";

function FooterCardImage() {
  return (
    <Container id="footer-img-container">
        <Col xs={6} md={4} style={{ display: 'inline' }}>
          <Image src={bjsvgImg} rounded id="footer-img-styling"/>
        </Col>
    </Container>
  );
}

export default FooterCardImage;