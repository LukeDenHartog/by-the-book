import React from 'react';
import Card from 'react-bootstrap/Card';
import './GroupedCards.css';
import './CardButton.css';
import girlWithCards from '../../assets/images/HomePagePhotos/cardPhotos/LifeMag-cards-publicDomain.jpeg';

function ImageAndText() {
  return (
    <div className="card-container">
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
          <button class="button">Blackjack History</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
        <button class="button">Learn from Legends</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
          <button class="button">1st Vegas experiences</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
          <button class="button">Good Vs Bad Tables</button>
        </Card.ImgOverlay>
      </Card>      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
          <button class="button">Vegas Content Creators</button> 
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
          <button class="button">Buy a Blackjack Table</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
        <button class="button">What to eat in Vegas</button>
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
        <Card.Img src={girlWithCards} alt="Card image" />
        <Card.ImgOverlay>
          <button class="button">Vegas Weather Forecast</button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImageAndText;
