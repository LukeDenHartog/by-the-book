import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import greenTop from '../../assets/images/HomePagePhotos/carouselPhotos/greentop.jpg';
import groupHands from '../../assets/images/HomePagePhotos/carouselPhotos/grouphands.jpeg'
import redTop from '../../assets/images/HomePagePhotos/carouselPhotos/redtop.jpg'
import blackBackgroundCards from '../../assets/images/HomePagePhotos/carouselPhotos/black-background-cards.jpeg'
import blackBackgroundImage from '../../assets/images/HomePagePhotos/carouselPhotos/blackbackground.jpeg'

function HomeCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          src={redTop}
          alt="First slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3 className="slideHeader">BlackJack Rules</h3>
          <div className="caption-background">
            
            <p className="carouselParagraph">The main objective is to have a hand value closer to 21 than the dealer's hand without exceeding 21.</p>
          </div>
          <Button className="interfaceLearnButton"variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={greenTop}
          alt="Second slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
        <h3 className="slideHeader">Basic Strategy</h3>
          <div className="caption-background">
            <p className="carouselParagraph">A widely-used approach that determines the optimal move for every hand—whether to hit, stand, double, or split.</p>
          </div>
          <Button className="interfaceLearnButton" variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={blackBackgroundCards}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3 className="slideHeader">Card Counting</h3>
          <div className="caption-background">
          <p className="carouselParagraph">Monitoring the distribution of high and low cards to tilt the odds in favor of the player.</p>
          </div>
          <Button className="interfaceLearnButton" variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={groupHands}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
        <h3 className="slideHeader">Get help with your addiction</h3>
          <div className="caption-background">
          <p className="carouselParagraph">Gambling addiction is a compulsive and uncontrollable urge to gamble despite severe consequences.</p>
          </div>
          <Button className="interfaceLearnButton" variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={blackBackgroundImage}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3 className="slideHeader">Sports Betting Advice</h3>
          <div className="caption-background">

          <p className="carouselParagraph">Some helpful advice on navigating the sportsbooks.</p>
          </div>
          <Button className="interfaceLearnButton" variant="primary">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
