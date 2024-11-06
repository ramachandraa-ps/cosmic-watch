import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpaceMonitorPage from './pages/SpaceMonitorPage';
import DeepSpacePage from './pages/DeepSpacePage';
import TechHubPage from './pages/TechHubPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/space-monitor" element={<SpaceMonitorPage />} />
        <Route path="/deep-space" element={<DeepSpacePage />} />
        <Route path="/tech-hub" element={<TechHubPage />} />
      </Routes>
    </Router>
  );
}

export default App;