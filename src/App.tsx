import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpaceMonitorPage from './pages/SpaceMonitorPage';
import DeepSpacePage from './pages/DeepSpacePage';
import TechHubPage from './pages/TechHubPage';
import InteractionZonePage from './pages/InteractionZone';
import QuizPage from './pages/QuizPage';
import WebinarsPage from './pages/WebinarsPage';
import PlanetWeightCalculator from './pages/PlanetWeightCalculator';
import AstronautAliasPage from './pages/AstronautAliasPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/space-monitor" element={<SpaceMonitorPage />} />
        <Route path="/deep-space" element={<DeepSpacePage />} />
        <Route path="/tech-hub" element={<TechHubPage />} />
        <Route path="/interaction-zone" element={<InteractionZonePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/webinars" element={<WebinarsPage />} />
        <Route path="/planet-weight-calculator" element={<PlanetWeightCalculator />} />
        <Route path="/astronaut-alias" element={<AstronautAliasPage />} />
      </Routes>
    </Router>
  );
}

export default App;