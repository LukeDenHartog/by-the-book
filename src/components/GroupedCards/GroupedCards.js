import React from 'react';
import Card from 'react-bootstrap/Card';
import './GroupedCards.css';
import './CardButton.css';
import  vegasBirdsEyeImg from '../../assets/images/HomePagePhotos/cardPhotos/VegasBirdsEye.jpeg';
import pokerChipsImg from '../../assets/images/HomePagePhotos/cardPhotos/PokerChips.jpeg';
import holdingCardsImg from '../../assets/images/HomePagePhotos/cardPhotos/LifeMagHoldingCards.jpeg';
import ultimateBjTable from '../../assets/images/HomePagePhotos/cardPhotos/UltimateBlackjackTable.jpeg';
import vegasSignImg from '../../assets/images/HomePagePhotos/cardPhotos/LasVegasSign.jpeg';
import ParisHotelImg from  '../../assets/images/HomePagePhotos/cardPhotos/LasVegasParisHotel.jpeg';
import jackAceThreeChipsImg from '../../assets/images/HomePagePhotos/cardPhotos/JackAceThreeChips.jpeg';
import franziskaBuffetImg from '../../assets/images/HomePagePhotos/cardPhotos/FranziskaGiffeyBuffet.jpeg';

function ImageAndText() {
  return (
    <div className="card-container">
      <Card className="custom-cards">
        <a href="https://www.stationcasinosblog.com/2015/06/32-vs-65-blackjack-a-devil-in-the-details/">
          <Card.Img src={holdingCardsImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">Blackjack History</button>
          </Card.ImgOverlay>
        </a>
      </Card>
      <Card className="custom-cards">
        <a href="https://www.nytimes.com/2012/03/10/sports/a-card-counting-mix-of-bibles-blackjack-and-cash.html">
          <Card.Img src={jackAceThreeChipsImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">Learn from Legends</button>
          </Card.ImgOverlay>
        </a>
      </Card>
      <Card className="custom-cards">
        <a href="https://www.canyontours.com/guides/15-tips-for-your-first-trip-to-las-vegas/">
          <Card.Img src={vegasBirdsEyeImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">1st Vegas experiences</button>
          </Card.ImgOverlay>
        </a>
      </Card>
      <Card className="custom-cards">
        <a href="https://www.stationcasinosblog.com/2015/06/32-vs-65-blackjack-a-devil-in-the-details/">
          <Card.Img src={ultimateBjTable} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">Good Vs Bad Tables</button>
          </Card.ImgOverlay>
        </a>
      </Card>      <Card className="custom-cards">
        <a href="https://www.youtube.com/@NormaGeli/">
          <Card.Img src={ParisHotelImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">Vegas Content Creators</button> 
          </Card.ImgOverlay>
        </a>
      </Card>
      <Card className="custom-cards">
        <a href="https://www.casinosupply.com/">
          <Card.Img src={pokerChipsImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">Buy a Blackjack Table</button>
          </Card.ImgOverlay>
        </a>
      </Card>
      <Card className="custom-cards">
        <a href="https://www.caesars.com/caesars-palace/restaurants/bacchanal-buffet">
          <Card.Img src={franziskaBuffetImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">What to eat in Vegas</button>
          </Card.ImgOverlay>
        </a>
      </Card>
        <Card className="custom-cards">
        <a href="https://www.wunderground.com/weather/us/nv/las-vegas">
          <Card.Img src={vegasSignImg} alt="Card image" />
          <Card.ImgOverlay>
            <button className="button">Vegas Weather Forecast</button>
          </Card.ImgOverlay>
        </a>
      </Card>
    </div>
  );
}

export default ImageAndText;
