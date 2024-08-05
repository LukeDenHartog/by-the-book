import './RulesPage.css';
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import ByTheBookStatement from "../../components/MissionStatement/BytheBookStatement.js";
import Card from 'react-bootstrap/Card';

function RulesPageModule() {
    return (
        <main id="rules-main-container">
            <Navbar />
            <Card bg="dark" text="white">
                <header>
                    <Card.Body>
                        <Card.Title>
                            <h1>Blackjack Rules</h1>
                        </Card.Title>
                        <Card.Text>
                            So, you've decided to learn how to play Blackjack? Great choice! It's a fun and easy game to learn. Players are dealt two cards face up, and the dealer is dealt two cards, one face up and one face down. The main objective of Blackjack, also known as 21, is to have a hand closer to 21 points than the dealer's hand.
                        </Card.Text>
                    </Card.Body>
                </header>
                <Card bg="success" text="white"id="how-to-win-card">
                    <Card.Body>
                        <h2>Winning</h2>
                        <ul>
                            <li>
                                <h4>Blackjack:</h4>
                                A hand totaling 21 with the first two cards (an Ace and a 10-value card) usually pays 3:2.
                            </li>
                            <li>
                                <h4>Higher Hand Value:</h4>
                                The player wins if their hand value is higher than the dealer's without exceeding 21.
                            </li>
                            <li>
                                <h4>Dealer Busts:</h4>
                                The player wins if the dealer's hand exceeds 21.
                            </li>
                            <li>
                                <h4>Tie:</h4>
                                If the player's hand and the dealer's hand have the same value, it’s a push (the player's bet is returned).
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                    <Card.Body>
                        <h3>Card Values:</h3>
                        <ul>
                            <li>Number cards (2-10) are worth their face value.</li>
                            <li>Face cards (Jack, Queen, King) are each worth 10 points.</li>
                            <li>Aces can be worth 1 or 11 points, depending on what benefits the hand more.</li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                    <Card.Body>
                        <h3>The Basic Rules:</h3>
                        <ol>
                            <li>Place your bet: Before the cards are dealt, players must make a wager. The table will indicate the minimum and maximum betting limits.</li>
                            <li>Receive your cards: After all bets are placed, the dealer will deal two cards to each player, face-up.</li>
                            <li>Decide to hit or stand: After receiving your cards, you can choose to 'hit' to receive additional cards or 'stand' to keep your current hand.</li>
                            <li>Dealer’s turn: Once all players have completed their turns, the dealer will reveal their face-down card and will hit or stand according to predetermined rules.</li>
                            <li>When the player finishes their turn, the dealer begins their turn by revealing the face-down card. If the dealer's hand totals 16 or less, they must hit. If it’s 17 or more, they must stand. Some blackjack rules require dealers to hit on a soft 17.</li>
                            <li>If a player's first two cards total 21, they have 'blackjack' and automatically win, typically paying 1.5 times their bet. If a player's hand exceeds 21, they 'bust' and lose their bet. If the player's hand ties with the dealer's, the bet is returned. Otherwise, the hand with the higher score wins.</li>
                        </ol>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                    <Card.Body>
                        <h3>More Black Jack Rules:</h3>
                        <ul>
                            <li>Hit: Take an additional card to get closer to 21.</li>
                            <li>Stand: Keep the current hand and end the turn.</li>
                            <li>Double Down: Double the initial bet and receive exactly one more card.</li>
                            <li>Split: If the initial two cards are of the same value, the player can split them into two separate hands, each with its own bet.</li>
                            <li>Surrender: In some casinos, a player can forfeit half their bet and give up their hand.</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Card>
            <Footer />
        </main>
    );
}

export default RulesPageModule;
