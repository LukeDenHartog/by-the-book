import './RulesPage.css';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Card from 'react-bootstrap/Card';
import BasicStratButton from '../../components/Buttons/BasicStratHomeButton.js';


function RulesPageModule() {
    return (
        <main id="rules-main-container">
            <Navbar />
            
            <Card bg="dark" border="info" text="white">
                <header>
                    <Card.Body>
                        <Card.Title>
                            <h1 id="title-header-bj">Blackjack Rules</h1>
                        </Card.Title>
                        <Card.Text>
                            So, you've decided to learn how to play Blackjack? Great choice! It's a fun and easy game to learn. 
                            Players are dealt two cards face up, and the dealer is dealt two cards, one face up and one face down. 
                            The main objective of Blackjack, also known as 21, is to have a hand closer to 21 points than the dealer's hand.
                        </Card.Text>
                    </Card.Body>
                </header>
            </Card>
            
            <h3 id="house-rules-variations">
                These are the basic rules, but keep in mind that variations and house rules can affect gameplay and strategy
            </h3>
            
            <Card bg="success" border="info" text="white">
                <Card.Body>
                    <h2>Winning</h2>
                    <ul id="winning-ul">
                        <li>
                            <h3 className="winning-sub-header">Blackjack:</h3>
                            A hand totaling 21 with the first two cards (an Ace and a 10-value card) usually pays 3:2.
                        </li>
                        <li>
                            <h3 className="winning-sub-header">Higher Hand Value:</h3>
                            The player wins if their hand value is higher than the dealer's without exceeding 21.
                        </li>
                        <li>
                            <h3 className="winning-sub-header">Dealer Busts:</h3>
                            The player wins if the dealer's hand exceeds 21.
                        </li>
                        <li>
                            <h3 className="winning-sub-header">Tie:</h3>
                            If the player's hand and the dealer's hand have the same value, it’s a push (the player's bet is returned).
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            
            <Card bg="dark" border="info" text="white">
                <Card.Body>
                    <h2>Card Values:</h2>
                    <Card bg="secondary" text="white">
                        <ul>
                            <li>Number cards (2-10) are worth their face value.</li>
                            <li>Face cards (Jack, Queen, King) are each worth 10 points.</li>
                            <li>Aces can be worth 1 or 11 points, depending on what benefits the hand more.</li>
                        </ul>
                    </Card>
                </Card.Body>
            </Card>
            
            <Card bg="dark" border="info" text="white">
                <Card.Body>
                    <h2>The Basic Rules:</h2>
                    <Card bg="secondary" text="white">
                        <ol>
                            <li>Place your bet: Before the cards are dealt, players must make a wager. The table will indicate the minimum and maximum betting limits.</li>
                            <li>Receive your cards: After all bets are placed, the dealer will deal two cards to each player, face-up.</li>
                            <li>Decide to hit or stand: After receiving your cards, you can choose to 'hit' to receive additional cards or 'stand' to keep your current hand.</li>
                            <li>Dealer’s turn: Once all players have completed their turns, the dealer will reveal their face-down card and will hit or stand according to predetermined rules.</li>
                            <li>When the player finishes their turn, the dealer begins their turn by revealing the face-down card. If the dealer's hand totals 16 or less, they must hit. If it’s 17 or more, they must stand. Some blackjack rules require dealers to hit on a soft 17.</li>
                            <li>If a player's first two cards total 21, they have 'blackjack' and automatically win, typically paying 1.5 times their bet. If a player's hand exceeds 21, they 'bust' and lose their bet. If the player's hand ties with the dealer's, the bet is returned. Otherwise, the hand with the higher score wins.</li>
                        </ol>
                    </Card>
                </Card.Body>
            </Card>
            
            <Card bg="dark" border="info" text="white">
                <Card.Body>
                    <h2>More Blackjack Rules:</h2>
                    <Card bg="secondary" text="white">
                        <ul>
                            <li>Hit: Take an additional card to get closer to 21.</li>
                            <li>Stand: Keep the current hand and end the turn.</li>
                            <li>Double Down: Double the initial bet and receive exactly one more card.</li>
                            <li>Split: If the initial two cards are of the same value, the player can split them into two separate hands, each with its own bet.</li>
                            <li>Surrender: In some casinos, a player can forfeit half their bet and give up their hand.</li>
                        </ul>
                    </Card>
                </Card.Body>
            </Card>
            
            <Card bg="dark" border="warning" text="white">
                <Card.Body>
                    <h2>Examples of Basic Strategy:</h2>
                    <Card bg="secondary" text="white" border="warning">
                        <ul>
                            <li><span className="highlight">Never</span> split 10s</li>
                            <li><span className="highlight">Never</span> split two 5s</li>
                            <li><span className="highlight">Always</span> split aces and 8s.</li>
                            <li>A general good rule of thumb is to always assume the dealer’s face-down card is worth 10.</li>
                            <li>Double down on 10 or 11 when the dealer’s face-up card is 9 or lower.</li>
                            <li>A good hand in blackjack is any hand with a value of 17 or higher. However, if the dealer has a face-up card of 7 or higher, you should aim for a hand value of 18 or higher.</li>
                        </ul>
                    </Card>
                    <div id="strat-button-flexbox">
                        <BasicStratButton />
                    </div>
                </Card.Body>
            </Card>
            
            <Footer />
        </main>
    );
}

export default RulesPageModule;
