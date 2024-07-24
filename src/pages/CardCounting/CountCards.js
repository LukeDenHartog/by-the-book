import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import ByTheBookStatement from "../../components/MissionStatement/BytheBookStatement.js"

function CountingCardsModule() {
    return (
        <>
        <Navbar/>

        <ByTheBookStatement />
        <Footer />
        </>
    )
}

export default CountingCardsModule;