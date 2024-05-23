import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ConstactInfo from './components/ContactInfo';
import Form from './components/Form';
import Header from './components/Header';
import FullscreenPage from './components/FullscreenPage';

function App() {
  return (
    <Router>
      <Header /> {/* Add the Header component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FullscreenPage" element={<FullscreenPage />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/ConstactInfo" element={<ConstactInfo/>} />
       
        
      </Routes>
    </Router>
  );
}

export default App;
