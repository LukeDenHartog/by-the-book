import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/LandingPage";
import AddictionPage from "./pages/AddictionHelp/AddictionPage";
import OptionsMenuPage from "./pages/BasicStrategyQuiz/ChallengeNavigation/OptionsMenu.js";
import BettingAdvicePage from "./pages/SportsBettingAdvice/BettingAdvice.js";
import TrainingMenuPage from "./pages/BasicStrategyQuiz/ChallengeNavigation/Training/TrainingStartPage.js";
import BasicRules from "./pages/BlackjackRules/RulesPage.js";
import SoftTotalsTraining from "./pages/TrainingSoftTotals/TrainingSoftTotals.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addiction-help" element={<AddictionPage />} />
        <Route path="/basic-rules" element={< BasicRules />} />
        <Route path="/betting-advice" element={<BettingAdvicePage />} />
        <Route path="/options-menu-page" element={<OptionsMenuPage />} />
        <Route path="/soft-totals-training" element={<SoftTotalsTraining />} />
        <Route path="/training-menu-page" element={<TrainingMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
