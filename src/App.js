import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HealthCheck from './pages/HealthCheck';
import CreateEditIncident from './pages/CreateEditIncident';
import MapView from './pages/MapView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MapView />} />
            <Route path="/health" element={<HealthCheck />} />
            <Route path="/create" element={<CreateEditIncident />} />
            <Route path="/edit/:id" element={<CreateEditIncident />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;