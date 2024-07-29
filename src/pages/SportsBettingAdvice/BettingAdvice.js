import "./BettingAdvice.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import KobeImg from "../../assets/images/AdvicePagePhotos/Kobe-Bryant.png";
import TomImg from "../../assets/images/AdvicePagePhotos/Tom-Brady-Image.jpeg";
import ExampleTable from "./ExampleTable.js";
import OhtaniFluidImg from "./ShoheiPhoto.js";

function AdvicePageModule() {
    return (
        <main>
            <Navbar />
            <div id="main-content-container">
                <h2>Betting Advice</h2>
                
                <article className="article-text">
                    <h4>Acknowledge the Element of Luck:</h4>
                    <p>The best team doesn't always win. There's no such thing as a sure bet and be careful about being overconfident.</p>
                </article>

                <div id="upper-section-container">
                    <div className="sports-img">
                        <img id="kobe-image" src={KobeImg} alt="Kobe Bean Bryant" width="200" height="300" />
                    </div>
                    <article className="article-text">
                        <h4>Check Track Records:</h4>
                        <p>Many people claim to be exceptional sports bettors, but only a few truly are. Trust those who share all their predictions and bets rather than just showcasing their wins. If you consider purchasing professional betting tips, ensure you can try them out for free first to verify their ability to outperform the market before making any payments.</p>
                    </article>
                </div>

                <article className="article-text">
                    <h4>Speed Is Important:</h4> 
                    <p>Game day announcements, such as starting goalies or injuries, can rapidly shift odds. For instance, in Game 3 of the 2022 playoff series between the Canes and Bruins, the odds of a Bruins victory increased by 2% within 23 minutes of the announcement that the Canes would start rookie Pyotr Kochetkov in goal due to Antti Raanta's injury. The Bruins ultimately won that game.</p>
                </article>

                <article className="article-text">
                    <h4>Seize Your Advantage:</h4>
                    <p>Some sportsbooks allow mid-game betting on futures markets during the regular season, updating the odds only once a night. For instance, if you want to bet on a team making the playoffs and they are leading 4-0 in the third period against a closely ranked opponent, it might be an opportune moment to place your wager. Conversely, if it's right before the game starts, you might prefer to wait and observe the game's progression before betting, as the futures odds won't change until the next morning.</p>
                </article>

                <div id="middle-section-container">
                    <div className="sports-img">
                        <img id="tom-image" src={TomImg} alt="Tom Brady" width="300" height="400" />
                    </div>
                    <article className="article-text" id="look-around-id">
                        <h4>Look Around:</h4>
                        <p id="look-around-paragraph">Odds can differ between sportsbooks. After deciding on your bet, it's beneficial to choose a trustworthy sportsbook that offers the best odds. Numerous websites compare and review betting apps, making it easy to find the best option for you.</p>
                    </article>
                </div>

                <article className="article-text">
                    <h4>Moneyline Bets:</h4>
                    <p>This is a straightforward bet on which team or player will win the game or match.</p>
                </article>

                <article className="article-text">
                    <h4>Point Spread Bets:</h4>
                    <p>This type of wager involves betting on the margin of victory. A point spread is set by oddsmakers to balance the betting field. You can bet on whether a team will win by more than the spread (covering the spread) or lose by less than the spread or win outright (not covering the spread).</p>
                </article>

                <article className="article-text">
                    <h4>Over/Under Bets (Totals):</h4>
                    <p>In this bet, you wager on whether the total points, goals, or runs scored by both teams combined will be over or under a line set by the sportsbook. The total is set by oddsmakers, and you simply choose whether the actual combined score will exceed or fall short of that number.</p>
                </article>

                <article className="article-text">
                    <h4>American Odds:</h4>
                    <p>When you see a minus sign (-) in front of the odds, it indicates the amount you need to bet to win $100. Conversely, a plus sign (+) shows the amount you’ll win for every $100 bet. For example, if you bet on the Oilers with a money line of -217, you would need to wager $217 to win $100, totaling $317 (your $217 bet plus $100 in winnings). On the other hand, if you bet $100 on the Kings with a money line of +183 and they win, you would earn $183, receiving a total of $283 (your $100 bet plus $183 in winnings).</p>
                </article>

                <ExampleTable />

                <article className="article-text">
                    <h4>Decimal Odds:</h4>
                    <p>Here’s how the decimal odds would apply to the matchup between the Lakers and the Warriors. To calculate your potential payout using decimal odds, multiply your stake by the odds. This total includes your initial bet. For example, if you bet $150 on the Lakers with decimal odds of 2.35, your total payout would be $150 * 2.35 = $352.50. Similarly, if you place an $80 bet on the Warriors with decimal odds of 4.25, you would receive $80 * 4.25 = $340. Most sportsbooks offer the option to switch between American and decimal odds, with many finding decimal odds more straightforward.</p>
                </article>

                <article className="article-text">
                    <h4>Futures:</h4>
                    <p>These types of bets involve predicting outcomes such as whether a team will make the playoffs, win their division, claim the Stanley Cup, or win a playoff series. Typically, these markets are less efficient compared to those for individual games. This is because professional gamblers often steer clear of futures bets due to the extended period their money is tied up—sometimes for several months. However, this can present an opportunity for astute bettors who are comfortable with having their funds locked in for a longer duration.</p>
                </article>

                <article className="article-text">
                    <h4>Parlays:</h4>
                    <p>These bets involve wagering on multiple events simultaneously. To win, all events must occur as predicted. While the odds of winning a parlay decrease with the number of events, the potential payout increases significantly. Typically, parlays do not offer as favorable a risk-to-reward ratio as other bet types. According to research by the UNLV Center for Gaming, sportsbooks earned $32.09 for every $100 wagered on parlays, compared to about $5 for standard single-game bets.</p>
                </article>

                <div id="ohtani-flexbox-container">
                    <OhtaniFluidImg />
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default AdvicePageModule;
