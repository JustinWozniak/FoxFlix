import React from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



// Then we'll fetch user data from this API
const popularActorsTask = async () =>
  await fetch("https://api.themoviedb.org/3/person/popular?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&page=1")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function PopularActors() {
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: popularActorsTask })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    console.log(data)
    let movieImageUrls = []
    let actorNames = []
    let trendingMoviesCount = data.results.length
    for (let i = 0; i < trendingMoviesCount; i++) {
      movieImageUrls.push(data.results[i].profile_path);
      actorNames.push(data.results[i].name)
    }

  // The rendered component
  return (
      <div>
        <h2 className="headerOne">Popular Actors:</h2>
        {
           <Carousel  arrows>
             {movieImageUrls.map((images, index) => {
                return   <div><img key={index} src={posterPath + images} alt={index} /> <h1 className="whiteText">{actorNames[index]}</h1></div>
             })}
           </Carousel>
     }</div>
  )}
export default PopularActors