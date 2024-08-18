// src/Cards.js
import React from 'react';
import './Cards.css';
import Features from './Features';

const Cards = () => {
  return (
    <div>
    <div className="cards-container">
      <div className="image-container">
        <img src="https://media.architecturaldigest.com/photos/664c9cf1cb8696d54c3a700e/1:1/w_1280,h_1280,c_limit/ProsepectRefuge_WhiteOaks_Day2_10271.jpg" alt="Example" className="left-image" />
      </div>
      <div className="right-container">
        {/* <h2 className="image-title">Image Title</h2>
        <p className="additional-text">This is some additional text to give more information.</p> */}
           <div className="right-images">
          <img src="https://media.architecturaldigest.com/photos/664756b6b07df8608c90820a/16:9/w_640,h_432,c_limit/isaac-shin-indiana-11-09-235X4A0039-Edit-full-resolution.jpg" alt="Example 1" className="right-image" />
          <img src="https://media.architecturaldigest.com/photos/6647ba72a9507adf51f3b8f8/16:9/w_640,h_432,c_limit/Clive%20Lonstein.jpg" alt="Example 2" className="right-image" />
          </div>
      </div>
    </div><p className="monospace-text">This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.This text uses the 'Lucida Console' font within a Monospace family.</p>
    
    <hr className="custom-hr" />
    <div className="features-project"> <Features /></div>
    </div>
  );
};

export default Cards;
