import React from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



// Then we'll fetch user data from this API
const loadNowPlaying = async () =>
  await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.REACT_APP_API_KEY)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function Trending() {
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: loadNowPlaying })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    console.log("")
    let movieImageUrls = []
    let trendingMovies = data.results
    let trendingMoviesCount = data.results.length
    for (let i = 0; i < trendingMoviesCount; i++) {
      movieImageUrls.push(data.results[i].poster_path);
    }

  // The rendered component
  return (
      <div>
        <h2 className="headerOne">Trending Movies:</h2>
        {
           <Carousel  arrows>
             {movieImageUrls.map((images, index) => {
               console.log("")
                return <img key={index} src={posterPath + images} alt={index} />;
             })}
           </Carousel>
     }</div>
  )}
export default Trending