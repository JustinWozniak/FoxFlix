import React from 'react';
import TrendingMovies from './TrendingMovies'
import TrendingTvShows from './TrendingTvShows'
import PopularActors from './PopularActors'
import Movie from '../Movie'
import TvShow from '../TvShow'
const Landing = () => (
  <div>
    <img className="mainImage" src="./images/flickfoxlogo.jpg" alt="Main Logo"></img>
    <div className="introDiv">
    Welcome to FoxFlix....the world's most popular and authoritative source for movie,
     TV and celebrity content. Find ratings and reviews for the newest movie and TV shows....

    </div>
    <TrendingMovies />
    <TrendingTvShows />
    <PopularActors />
    <TvShow/>
  </div>
);

export default Landing;
