import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ConstactInfo from './components/User/ContactInfo';
import UploadForm from './components/User/UploadForm';
import Header from './components/Home/Header';
import FullscreenPage from './components/Feature/FullscreenPage';

function App() {
  return (
    <Router>
      <Header /> {/* Add the Header component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FullscreenPage" element={<FullscreenPage />} />
        <Route path="/UploadForm" element={<UploadForm />} />
        <Route path="/ConstactInfo" element={<ConstactInfo/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
