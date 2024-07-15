import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import Carousel from "../../pages/Home/Carousel.js";
import ContentGroup from "../../components/GroupedCards/GroupedCards.js";
import ByTheBookStatement from "../../components/MissionStatement/BytheBookStatement.js";

function LandingPageFunction() {
    return (
        <>
        <Navbar />
        <Carousel />
        <ContentGroup />
        <ByTheBookStatement />
        <Footer />
        </>
    )
}

export default LandingPageFunction;