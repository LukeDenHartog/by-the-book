import "./InteractiveInterface.css";
import Card from 'react-bootstrap/Card';

function InteractiveInterface() {
    return (
        <Card className="bg-dark text-white custom-background">
            <Card.Img src="./kaysha.jpg" alt="Card image" id="kayshaPic" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default InteractiveInterface;
