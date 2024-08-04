import React from 'react';
import localfood from '../resources/images/localfood.jpg';
import earthfood from '../resources/images/earthfood.jpg';
import interstellarfood from '../resources/images/interstellarfood.jpg';
import galaxymap from '../resources/images/galaxymap.png';
import '../styles/home.css';
import { useState, useEffect } from 'react';
import logo from '../assets/SpaceBites_logo__2.png'

const Home = () => {
    const [displayedText, setDisplayedText] = useState('');
    // for SOME REASON the second letter of the text is not showing up, hence the zero width space next in Order
    const fullText = 'O​rder bites out of this world here...';


    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
        if (index === fullText.length-1) {
          clearInterval(interval);
        }
      }, 100); // Adjust the speed by changing the interval time (in milliseconds)
      
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
    return (
    <div className="main-home">
      <div className="home-container">
        <img src={logo} alt='logo'/>
        <div className="home-contents">
          <h1>​{displayedText}</h1>
          <form className="search-form">
            <input type="text" placeholder="Search for your craving..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
      <div className="nav-cards">
        <a href="/discover">
          <div className="nav-card">
            <div className="imgWrapper">
              <img src={localfood} alt="Local Food" />
            </div>
            <h3>Local Food</h3>
            <p>Endulge in some of the finest local cuisine</p>
          </div>
        </a>
        <a href="/discover">
          <div className="nav-card">
            <div className="imgWrapper">
              <img src={earthfood} alt="Earth Food" />
            </div>
            <h3>Earth Food</h3>
            <p>Nostalgic food that makes you feel at home</p>
          </div>
        </a>
        <a href="/discover">
          <div className="nav-card">
            <div className="imgWrapper">
              <img src={interstellarfood} alt="Interstellar Food" />
            </div>
            <h3>Interstellar Food</h3>
            <p>New and exciting eats</p>
          </div>
        </a>
      </div>
      <h2>Find bites near you:</h2>
      <div className="planet-map">
        <img src={galaxymap} alt="Space Bites Logo" />
      </div>
    </div>
  );
};

export default Home;
