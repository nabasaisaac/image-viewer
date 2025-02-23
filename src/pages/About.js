import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Image Viewer</h1>
      <p>Explore a stunning collection of images in our gallery.</p>
      <Link to="/gallery" className="cta-button">View Gallery</Link>
    </div>
  );
};

export default Home;