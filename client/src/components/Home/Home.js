// client/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Feature/Cards';
import Footer from './Footer';
import './Home.css'
import PhotoSlider from './PhotoSlider';
import "bootstrap/dist/css/bootstrap.css";
function Home() {
  // Fetch projects from the server and display them
  return (
    <div>
      {/* <div className="centered-text-container">
        <h1 className="centered-text">Architecture Design</h1>


      </div> */}
      <div className=''>
            <PhotoSlider />
        </div>

      <Card />
      <Footer/>
      <Link to="/UploadForm">
        {/* <button>Contact Us</button> */}

        {/* <span>Contact Us</span> */}
      </Link>
    </div>
    

  );
}

export default Home;
