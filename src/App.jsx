import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Router yerine Routes ve Route kullanın

import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
