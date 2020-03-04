import React,{ useState } from 'react';
import TrendingMovies from '../TrendingMovies'
import TrendingTvShows from '../TrendingTvShows'
import PopularActors from '../PopularActors'
import Movie from '../Movie'
import Actor from '../Actor'


function Landing() {
  let [movieId, setMovieId] = useState("")
  console.log(movieId)
  return(
  <div>
    <div className="introDiv">
      Welcome to FoxFlix....the world's most popular and authoritative source for movie,
       TV and celebrity content. Find ratings and reviews for the newest movie and TV shows....
    </div>   

    {movieId > 28 ? <Movie value={movieId}/> :  
    <div> 
      <TrendingMovies type={movieId} function={setMovieId}/>
      <TrendingTvShows />
      <PopularActors /> 
      </div>}
  </div>
  )
}


export default Landing;
