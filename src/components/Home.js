// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Guvi Blog</h1>

      <div className="image-section">
        <div className="image-container">
          <Link to="/image-detail/1">
          <img
             src=""
             alt="Image 1"/>
            <div className="image-heading">Image 1 Heading</div>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/image-detail/2">
            <img
              src=""
              alt="Image 2"
            />
            <div className="image-heading">Image 2 Heading</div>
          </Link>
        </div>
        {/* Add more image containers as needed */}
      </div>
    </div>
  );
};

export default Home;
