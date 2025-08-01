import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import JapaneseGuide from './JapaneseGuide';

const AppWithRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guide-to-learning-japanese" element={<JapaneseGuide />} />
      </Routes>
    </Router>
  );
};

export default AppWithRouter; 