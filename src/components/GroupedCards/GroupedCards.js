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
        <Card.Img src={holdingCardsImg} alt="Card image" />
        <Card.ImgOverlay>
          <button className="button">Blackjack History</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={jackAceThreeChipsImg} alt="Card image" />
        <Card.ImgOverlay>
        <button className="button">Learn from Legends</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={vegasBirdsEyeImg} alt="Card image" />
        <Card.ImgOverlay>
          <button className="button">1st Vegas experiences</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={ultimateBjTable} alt="Card image" />
        <Card.ImgOverlay>
          <button className="button">Good Vs Bad Tables</button>
        </Card.ImgOverlay>
      </Card>      <Card className="custom-cards">
        <Card.Img src={ParisHotelImg} alt="Card image" />
        <Card.ImgOverlay>
          <button className="button">Vegas Content Creators</button> 
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={pokerChipsImg} alt="Card image" />
        <Card.ImgOverlay>
          <button className="button">Buy a Blackjack Table</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={franziskaBuffetImg} alt="Card image" />
        <Card.ImgOverlay>
        <button className="button">What to eat in Vegas</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={vegasSignImg} alt="Card image" />
        <Card.ImgOverlay>
          <button className="button">Vegas Weather Forecast</button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImageAndText;
