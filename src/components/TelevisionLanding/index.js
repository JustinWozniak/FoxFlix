import React, { useState } from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import AiringToday from './AiringToday'
import MostPopularTv from './MostPopularTv'
import TopRatedTvShows from './TopRatedTvShows'
import TvToCheckOut from './TvToCheckOut'

function TelevisionLanding(props) {

  // The rendered component
  return (
    <div>
    <AiringToday />
    <MostPopularTv />
    <TopRatedTvShows />
    <TvToCheckOut />
    </div>
  )
}



export default TelevisionLanding