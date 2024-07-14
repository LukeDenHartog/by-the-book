import './Carousel.css'
import './SlideButtons.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import greenTopImg from '../../assets/images/HomePagePhotos/carouselPhotos/Greentop.jpg';
import groupHandsImg from '../../assets/images/HomePagePhotos/carouselPhotos/Grouphands.jpeg'
import redTopImg from '../../assets/images/HomePagePhotos/carouselPhotos/Redtop.jpg'
import blackBackgroundCardsImg from '../../assets/images/HomePagePhotos/carouselPhotos/Black-background-cards.jpeg'
import blackBackgroundImage from '../../assets/images/HomePagePhotos/carouselPhotos/Blackbackground.jpeg'

function HomeCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          src={redTopImg}
          alt="First slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3 className="slideHeader">BlackJack Rules</h3>
          <div className="caption-background"> 
            <p className="carouselParagraph">The main objective is to have a hand value closer to 21 than the dealer's hand without exceeding 21.</p>
          </div>
          <Button className="learnMoreButton"variant="primary">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={greenTopImg}
          alt="Second slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
        <h3 className="slideHeader">Basic Strategy</h3>
          <div className="caption-background">
            <p className="carouselParagraph">A widely-used approach that determines the optimal move for every hand—whether to hit, stand, double, or split.</p>
          </div>
          <div class="">
          <Button id="quiz--button" variant="warning">Mini Quiz</Button>
          <Button className="learnMoreButton" id=""variant="primary">Learn More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={blackBackgroundCardsImg}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
          <h3 className="slideHeader">Card Counting</h3>
          <div className="caption-background">
            <p className="carouselParagraph">Monitoring the distribution of high and low cards to tilt the odds in favor of the player.</p>
          </div>
          <Button className="learnMoreButton" variant="primary">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={groupHandsImg}
          alt="Third slide"
          className="d-block w-100 interfacePic"
        />
        <Carousel.Caption>
        <h3 className="slideHeader">Get help with your addiction</h3>
          <div className="caption-background">
            <p className="carouselParagraph">Gambling addiction is a compulsive and uncontrollable urge to gamble despite severe consequences.</p>
          </div>
          <Button className="learnMoreButton" variant="primary">Learn More</Button>
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
          <Button className="learnMoreButton" variant="primary">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
