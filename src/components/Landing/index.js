import React from 'react';
import TrendingMovies from './TrendingMovies'
import TrendingTvShows from './TrendingTvShows'
import PopularActors from './PopularActors'

const Landing = () => (
  <div>
    <img className="mainImage" src="./images/flickfoxlogo.jpg" alt="Main Logo"></img>
    <div className="introDiv">
    Welcome to FoxFlix....your home for everything on movies, actors and reviews...

    </div>
    <TrendingMovies />
    <TrendingTvShows />
    <PopularActors />
  </div>
);

export default Landing;
