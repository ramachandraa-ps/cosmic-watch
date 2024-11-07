import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpaceMonitorPage from './pages/SpaceMonitorPage';
import DeepSpacePage from './pages/DeepSpacePage';
import TechHubPage from './pages/TechHubPage';
import InteractionZonePage from './pages/InteractionZonePage';
import QuizPage from './pages/QuizPage';

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
      </Routes>
    </Router>
  );
}

export default App;