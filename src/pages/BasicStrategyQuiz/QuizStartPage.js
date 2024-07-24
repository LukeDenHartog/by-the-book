import "./QuizStartPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import GroupedCards from "../../components/GroupedCards/GroupedCards.js"
function QuizStartPageModule() {
    return (
        <>
        <Navbar/>
        <GroupedCards/>
        <Footer />
        </>
    )
}

export default QuizStartPageModule;