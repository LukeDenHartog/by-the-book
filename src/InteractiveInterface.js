import './InteractiveInterface.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import greenTop from './greentop.jpg';
import blackBackgroundImage from './blackbackground.jpeg'
import groupHands from './grouphands.jpeg'
import redTop from './redtop.jpg'
import blackBackgroundCards from './black-background-cards.jpeg'

function UncontrolledExample() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          src={redTop}
          alt="First slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <div className="caption-background">
            <h3>BlackJack Rules</h3>
            <p className="carouselParagraph">The main objective is to have a hand value closer to 21 than the dealer's hand without exceeding 21.</p>
          </div>
          <Button className="interfaceButton"variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={greenTop}
          alt="Second slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <div className="caption-background">
            <h3>Basic Strategy</h3>
            <p className="carouselParagraph">Strategy determines the best move for every hand: hit, stand, double, split.</p>
            <Button variant="primary">Learn More</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={blackBackgroundCards}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <div className="caption-background">
          <h3>Card Counting</h3>
          <p className="carouselParagraph">Monitoring the distribution of high and low cards to tilt the odds in favor of the player.</p>
          <Button variant="primary">Learn More</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={groupHands}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <div className="caption-background">
          <h3>Get help with your addiction</h3>
          <p className="carouselParagraph"></p>
          </div>
          <Button variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={blackBackgroundImage}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <div className="caption-background">
          <h3>Sports Betting Advice</h3>
          <p className="carouselParagraph">Some helpful advice on navigating the sportsbooks.</p>
          <Button variant="primary">Learn More</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
