import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleMouseEnter = (option) => {
    setHoveredOption(option);
  };

  return (
    <header>
      <div className="Guvi">
        <img
          src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"
          alt="Company Logo"
          style={{ height: '80px', width: 'auto', marginRight: '10px' }}
        />
      </div>
      <div className="header-content">
        <h1>Welcome to the Guvi</h1>
        <img
          src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"
          alt="Company Logo"
          style={{ height: '400px', width: 'auto', marginRight: '100px' }}
        />
        <nav>
          <ul>
            <li>
              <Link to="/" onMouseEnter={() => handleMouseEnter('home')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/full-stack-development" onMouseEnter={() => handleMouseEnter('fullstack')}>
                Full Stack Web Development
              </Link>
            </li>
            <li>
              <Link to="/data-science" onMouseEnter={() => handleMouseEnter('datascience')}>
                Data Science
              </Link>
            </li>
            {/* Add similar Links for other options */}
          </ul>
        </nav>

        {hoveredOption && (
          <div className="hover-content">
            {/* Dynamically render the corresponding component based on the hoveredOption */}
            {hoveredOption === 'home' && (
              <p>
                <Link to="https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/" className="hover-image-link">
                  <img
                    src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp"
                    alt="Guvi-All"
                    style={{ height: '400px', width: 'auto', marginRight: '200px' }}
                  />
                  <br />
                  <Link to="https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/" className="image-title-link" style={{ fontSize: '30px' }}>
                    Home Title
                  </Link>
                </Link>
              </p>
            )}
            {hoveredOption === 'fullstack' && (
              <p>
                <Link to="/full-stack-development" className="hover-image-link">
                  <img
                    src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp"
                    alt="Full Stack"
                    style={{ height: '400px', width: 'auto', marginRight: '200px' }}
                  />
                  <br />
                  <Link to="https://www.guvi.in/blog/category/full-stack-development/" className="image-title-link" style={{ fontSize: '30px' }}>
                    Full Stack Web Development Course
                  </Link>
                </Link>
              </p>
            )}
            {hoveredOption === 'datascience' && (
              <p>
                <Link to="/datascience" className="hover-image-link">
                  <img
                    src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg"
                    alt="Data Science"
                    style={{ height: '400px', width: 'auto', marginRight: '100px' }}
                  />
                  <br />
                  <Link to="/datascience" className="image-title-link" style={{ fontSize: '30px' }}>
                    Data Science Online Course
                  </Link>
                </Link>
              </p>
            )}
            {/* Add similar blocks for other options */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
