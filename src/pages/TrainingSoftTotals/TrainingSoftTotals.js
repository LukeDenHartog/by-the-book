import './TrainingSoftTotals.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import greenImg from './greenImg-33b864.png';
import SoftTotalArrays from './SoftTotalArrays';

function SoftTotalsTraining() {

    function getRandomItems(array, count) {
        let result = [];
        let tempArray = [...array];
        
        for (let i = 0; i < count; i++) {
            if (tempArray.length === 0) break;
            const randomSoftIndex = Math.floor(Math.random() * tempArray.length);
            result.push(tempArray[randomSoftIndex]);
            tempArray.splice(randomSoftIndex, 1);
        }
        
        return result;
    }
    
    const randomItems = getRandomItems(SoftTotalArrays, 20);
    console.log(randomItems);

    const DosButton = document.getElementById('soft-training-dos-button');
    const DohButton = document.getElementById('soft-training-doh-button');
    const HitButton = document.getElementById('soft-training-hit-button');
    const StandButton = document.getElementById('soft-training-stand-button');

    return (
        <div className="trainer-container">
            <Card>
                <Card.Img id="soft-training-background" variant="top" src={greenImg} />
                <Card.ImgOverlay className="training-img-overlay">
                    <h2>Dealer's hand: 10</h2>
                    <h2>vs.</h2>
                    <h2>Player 1's hand: 18</h2>
                    <Card.Body className="soft-training-card-body">
                    </Card.Body>
                    <Row id="soft-training-row">
                        <Col xs={6} className="soft-button-col">
                            <Button 
                                variant="primary" 
                                className="soft-training-button-ele" 
                                id="soft-training-dos-button"
                            >
                                DoS
                            </Button>
                        </Col>
                        <Col xs={6} className="soft-button-col">
                            <Button 
                                variant="primary" 
                                className="soft-training-button-ele" 
                                id="soft-training-doh-button"
                            >
                                DoH
                            </Button>
                        </Col>
                        <Col xs={6} className="soft-button-col">
                            <Button 
                                variant="primary" 
                                className="soft-training-button-ele" 
                                id="soft-training-hit-button"
                            >
                                Hit
                            </Button>
                        </Col>
                        <Col xs={6} className="soft-button-col">
                            <Button 
                                variant="primary" 
                                className="soft-training-button-ele" 
                                id="soft-training-stand-button"
                            >
                                Stand
                            </Button>
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
            <button 
                id="soft-challenge-start-button" 
                onClick={getRandomItems}
            >
                Start
            </button>
        </div>
    );
}

export default SoftTotalsTraining;
