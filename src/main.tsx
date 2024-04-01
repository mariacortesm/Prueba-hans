import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Store from './Store.tsx';
import LandingPage from './landingPage.tsx';
import CalendarEvent from './calendarEvent.tsx';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/calendar_event" element={<CalendarEvent />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
