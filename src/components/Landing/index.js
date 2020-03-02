import React,{ useState } from 'react';
import TrendingMovies from '../TrendingMovies'
import TrendingTvShows from '../TrendingTvShows'
import PopularActors from '../PopularActors'
import Movie from '../Movie'
import Actor from '../Actor'
import landingContext from "./landingContext"

function Landing() {
  let [typeOfComponentToShow, setTypeOfComponentToShow] = useState("https://api.themoviedb.org/3/")
  let n = typeOfComponentToShow.search("movdsie/");
  console.log(typeOfComponentToShow)

  return(
  <div>
    <div className="introDiv">
      Welcome to FoxFlix....the world's most popular and authoritative source for movie,
       TV and celebrity content. Find ratings and reviews for the newest movie and TV shows....
  
    </div>   
    <landingContext.Provider value={typeOfComponentToShow}>
    {n > 0 ? <Movie props={typeOfComponentToShow}/> :  
    <div> 
      <TrendingMovies />
      <TrendingTvShows />
      <PopularActors /> 
      </div>}
    
      </landingContext.Provider>
  </div>
  )
}


export default Landing;
