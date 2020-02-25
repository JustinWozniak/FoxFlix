import React from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



// Then we'll fetch user data from this API
const TrendingTvShowsTask = async () =>
  await fetch("https://api.themoviedb.org/3/discover/tv?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function TrendingTvShows() {
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: TrendingTvShowsTask })
  if (isLoading) return "Loading..."
  if (error) return `Sorry, Theres an error on our end;(): ${error.message}`
  if (data)
    console.log(data)
  let nowPlayingMoviesImageUrls = []
  let nowPlayingMoviesCount = data.results.length
  for (let i = 0; i < nowPlayingMoviesCount; i++) {
    nowPlayingMoviesImageUrls.push(data.results[i].poster_path);

  }

  // The rendered component
  return (
    <div>
      <h2 className="headerOne">Trending Tv Shows:</h2>
      {
        <Carousel arrows slidesPerScroll={5}
          slidesPerPage={5}
          infinite
          arrows>
          {nowPlayingMoviesImageUrls.map((images, index) => {
            console.log("")
            return <img className="largeImages" key={index} src={posterPath + images} alt={index} />;
          })}
        </Carousel>
      }</div>
  )
}
export default TrendingTvShows