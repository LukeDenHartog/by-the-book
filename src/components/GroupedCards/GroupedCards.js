import React from 'react';
import Card from 'react-bootstrap/Card';
import './GroupedCards.css';
import girlWithCards from '../../assets/images/HomePagePhotos/cardPhotos/LifeMag-cards-publicDomain.jpeg';

function ImageAndTextExample() {
  return (
    <div className="card-container">
      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>
      <Card className="custom-cards">
      <Card.Img src={girlWithCards} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
      </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImageAndTextExample;
