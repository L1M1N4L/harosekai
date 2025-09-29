import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import JapaneseGuide from './JapaneseGuide';
import Talks from './Talks';
import Writings from './Writings';

const AppWithRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guide-to-learning-japanese" element={<JapaneseGuide />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/writings" element={<Writings />} />
      </Routes>
    </Router>
  );
};

export default AppWithRouter; 