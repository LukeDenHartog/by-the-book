import './InteractiveInterface.css'
import Carousel from 'react-bootstrap/Carousel';
import kayshaImage from './kaysha.jpeg';
import blackBackgroundImage from './blackbackground.jpeg'
import redTop from './redtop.jpg'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={blackBackgroundImage}
          alt="First slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={kayshaImage}
          alt="Second slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={redTop}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
