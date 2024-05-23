// client/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Cards';
import './Home.css'
function Home() {
  // Fetch projects from the server and display them
  return (
    <div>
      <div className="centered-text-container">
        <h1 className="centered-text">Architecture Design</h1>

      </div>
      <Card />
    </div>

  );
}

export default Home;
