import React,{ useState } from 'react';
import TrendingMovies from '../TrendingMovies'
import TrendingTvShows from '../TrendingTvShows'
import PopularActors from '../PopularActors'
import Movie from '../Movie'
import Actor from '../Actor'
import TvShow from '../TvShow';


function Landing() {
  let [movieId, setMovieId] = useState("")
  let [tvShowId, setTvShowId] = useState("")
  let [componentType, setComponentType] = useState("")
  let [tvComponentType, setTvComponentType] = useState("")
  return(
  <div>
    <div className="introDiv">
      Welcome to FoxFlix....the world's most popular and authoritative source for movie,
       TV and celebrity content. Find ratings and reviews for the newest movie and TV shows....
    </div>   

    {componentType === "movie/" ? <Movie value={movieId}/> : 
    tvComponentType === "tv/" ? <TvShow  value={tvShowId}/> : 
    <div> 
      <TrendingMovies type={movieId} function={setMovieId} componentTypeId={setComponentType}/>
      <TrendingTvShows type={tvShowId} function={setTvShowId} componentTypeId={setTvComponentType}/>
      <PopularActors /> 
      </div>}
  </div>
  )
}


export default Landing;
