import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpaceMonitorPage from './pages/SpaceMonitorPage';
import DeepSpacePage from './pages/DeepSpacePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/space-monitor" element={<SpaceMonitorPage />} />
        <Route path="/deep-space" element={<DeepSpacePage />} />
      </Routes>
    </Router>
  );
}

export default App;