import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

export default function App() 
{
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/codelandia-3/" element={<Home />} />
        </Routes>
      </main>

      <footer></footer>
    </Router>
  )
}