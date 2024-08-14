import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SoftTotalArrays from './SoftTotalArrays';
import greenImg from './greenImg-33b864.png';
import './TrainingSoftTotals.css';

function SoftTotalsTraining() {
    return (
        <div className="trainer-container">
            <Card>
                <Card.Img id="no" variant="top" src={greenImg} />
                <Card.ImgOverlay>
                    <h2>18</h2>
                    <h2>vs.</h2>
                    <h2>A3</h2>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Text></Card.Text>
                    <Button variant="primary" id="soft-training-dos-button">DoS</Button>
                    <Button variant="primary" id="soft-training-doh-button">DoH</Button>
                    <Button variant="primary" id="soft-training-hit-button">Hit</Button>
                    <Button variant="primary" id="soft-training-stand-button">Stand</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SoftTotalsTraining;
