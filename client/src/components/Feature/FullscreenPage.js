import React from 'react';
import { useLocation,  Link  } from 'react-router-dom';
       
import './FullscreenPage.css'; // Import the CSS file

const FullscreenPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const imageUrl = searchParams.get('imageUrl');

  return (
    <div className="fullscreen-container">
      <img src={imageUrl} alt={title} className="responsive-image" />
      <h1 >{title}</h1>
      <p>{description}</p>
      <Link to="/UploadForm">
        <button>Contact Us</button>
      </Link>
    </div>
  );
};

export default FullscreenPage;
