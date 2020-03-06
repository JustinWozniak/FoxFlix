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
  let [actorsId, setActorsId] = useState("")
  return(
  <div>
    <div className="introDiv">
    {componentType === "movie/" ? "FoxFlix movies are updated often with new quotes and images! " : 
    componentType === "tv/" ? "FoxLix is the prefect place to find up-todate information of your favorite tv shows!" :
    "Welcome to FoxFlix....the world's most popular and authoritative source for movie,TV and celebrity content. Find ratings and reviews for the newest movie and TV shows."
   } 
</div>
    {componentType === "movie/" ? <Movie value={movieId} componentTypeId={setComponentType} /> : 
    tvComponentType === "tv/" ? <TvShow  value={tvShowId}/>:
    <div> 
      <TrendingMovies type={movieId} function={setMovieId} componentTypeId={setComponentType} actorsId={actorsId} setActorsId={setActorsId}/>
      <TrendingTvShows type={tvShowId} function={setTvShowId} componentTypeId={setTvComponentType}/>
      <PopularActors /> 
     
      </div>}
  </div>
  )
}


export default Landing;
