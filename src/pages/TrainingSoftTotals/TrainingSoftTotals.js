import React, { useState } from 'react';
import './TrainingSoftTotals.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenImg from './greenImg-33b864.png';
import SoftTotalArrays from './SoftTotalArrays';

function SoftTotalsTraining() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSoftScore, setCurrentSoftScore] = useState(0);

    function getRandomItems(array, count) {
        const result = [];
        const tempArray = [...array];
        
        for (let i = 0; i < count; i++) {
            if (tempArray.length === 0) break;
            const randomIndex = Math.floor(Math.random() * tempArray.length);
            result.push(tempArray[randomIndex]);
            tempArray.splice(randomIndex, 1);
        }
        
        return result;
    }

    const randomItems = getRandomItems(SoftTotalArrays, 40);

    const incrementScore = () => {
        setCurrentSoftScore(currentSoftScore + 1);
    };

    const incrementIndex = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === randomItems.length - 1) {
            alert(`Your score was ${currentSoftScore} out of 40 correct`);
        }
    };

    function findCorrectAnswer(playerInput) {
        if (playerInput === randomItems[currentIndex].answer) {
            incrementScore();
        }
        incrementIndex();
    }

    return (
        <div className="trainer-container">
            <Card>
                <Card.Img 
                    id="soft-training-background" 
                    variant="top" 
                    src={greenImg} 
                />
                <Card.ImgOverlay className="training-img-overlay">
                    <h2>Dealer's hand: {randomItems[currentIndex].dealerHand}</h2>
                    <h2>vs.</h2>
                    <h2>Player 1's hand: {randomItems[currentIndex].playerHand}</h2>
                    <Card.Body className="soft-training-card-body" />
                    <Row id="soft-training-row">
                        <Col xs={6} className="soft-button-col">
                            <Button
                                variant="primary"
                                className="soft-training-button-ele"
                                id="soft-training-dos-button"
                                onClick={() => findCorrectAnswer("dos")}
                            >
                                DoS
                            </Button>
                        </Col>
                        <Col xs={6} className="soft-button-col">
                            <Button
                                variant="primary"
                                className="soft-training-button-ele"
                                id="soft-training-doh-button"
                                onClick={() => findCorrectAnswer("doh")}
                            >
                                DoH
                            </Button>
                        </Col>
                        <Col xs={6} className="soft-button-col">
                            <Button
                                variant="primary"
                                className="soft-training-button-ele"
                                id="soft-training-hit-button"
                                onClick={() => findCorrectAnswer("hit")}
                            >
                                Hit
                            </Button>
                        </Col>
                        <Col xs={6} className="soft-button-col">
                            <Button
                                variant="primary"
                                className="soft-training-button-ele"
                                id="soft-training-stand-button"
                                onClick={() => findCorrectAnswer("stand")}
                            >
                                Stand
                            </Button>
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default SoftTotalsTraining;
