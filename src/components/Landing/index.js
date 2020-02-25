import React from 'react';
import Trending from './trending'

const Landing = () => (
  <div>
    <img className="mainImage" src="./images/flickfoxlogo.jpg" alt="Main Logo"></img>
    <div className="introDiv">
    Welcome to FoxFlix....your home for everything on movies, actors and reviews...

    </div>
    <Trending />
  </div>
);

export default Landing;
