import React, { useState } from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import landingContext from "../Landing/landingContext"
import MoviesInTheaters from './moviesInTheaters'
import TrendingMovies from "../TrendingMovies"
import RatedR from './RatedR'
import ChildrensMovies from './ChildrensMovies'



function MoviesLanding(props) {

  // The rendered component
  return (
    <div>
      <MoviesInTheaters />
      <TrendingMovies />
      <RatedR />
      <ChildrensMovies />
    </div>
  )
}



export default MoviesLanding