import React, { useState } from 'react';
import './TrainingSoftTotals.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenImg from './greenImg-33b864.png';
import SoftTotalArrays from './SoftTotalArrays';


function getRandomItems(array, count) {
    const tempArray = [...array];
    /* Fisher-Yates shuffle (aka the Knuth shuffle)
    (i = tempArray.length - 1: You start at the last element of the array.)
    (randomIndex variable is a random index from 0 and i)
    Swap tempArray[i] and tempArray[randomIndex]
    */
    for (let i = tempArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [tempArray[i], tempArray[randomIndex]] = [tempArray[randomIndex], tempArray[i]];
    }
    
    return tempArray.slice(0, count);
}


function SoftTotalsTraining() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSoftScore, setCurrentSoftScore] = useState(0);
    const [randomItems] = useState(() => getRandomItems(SoftTotalArrays, 39));
// The () => getRandomItems(SoftTotalArrays, 39) is called a lazy initializer. It tells React: "Hey React, when you're ready, call this function to get the value"

    const incrementScore = () => {
        setCurrentSoftScore(currentSoftScore + 1);
    };

    const incrementIndex = () => {
        if (currentIndex === randomItems.length - 1) {
            alert(`Your score was ${currentSoftScore} out of 40 correct`);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    function findCorrectAnswer(playerInput) {
        if (playerInput === randomItems[currentIndex].answer) {
            incrementScore();
            prompt('correct')
        }else {
            prompt(`incorrect, the answer was ${randomItems[currentIndex].answer}`)
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
                    <h2 id="playerHandHeader">Your hand: {randomItems[currentIndex].playerHand}</h2>
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
