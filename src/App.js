import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/LandingPage";
import AddictionPage from "./pages/AddictionHelp/AddictionPage";
import BasicRules from "./pages/BlackjackRules/RulesPage";
import BettingAdvicePage from "./pages/SportsBettingAdvice/BettingAdvice";
import OptionsMenuPage from "./pages/BasicStrategyTraining/ChallengeNavigation/OptionsMenu";
import SoftTotalsTrainingPage from "./pages/BasicStrategyTraining/TrainingSoftTotals/TrainingSoftTotals";
import TrainingMenuPage from "./pages/BasicStrategyTraining/ChallengeNavigation/Training/TrainingStartPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addiction-help" element={<AddictionPage />} />
        <Route path="/basic-rules" element={< BasicRules />} />
        <Route path="/betting-advice" element={<BettingAdvicePage />} />
        <Route path="/options-menu" element={<OptionsMenuPage />} />
        <Route path="/soft-totals-training" element={<SoftTotalsTrainingPage />} />
        <Route path="/training-menu" element={<TrainingMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
