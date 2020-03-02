import React, { useState } from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


// Then we'll fetch user data from this API
const trendingMoviesTask = async () =>
  await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.REACT_APP_API_KEY)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function TrendingMovies() {
 
  const [link, setLink] = useState("https://api.themoviedb.org/3/movie/")
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: trendingMoviesTask })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data) {
    let movieNumber = data.results
    let movieImageUrls = []
    let movieNumbers = []
    let trendingMoviesCount = data.results.length
    for (let i = 0; i < trendingMoviesCount; i++) {
      movieImageUrls.push(data.results[i].poster_path);
      movieNumbers.push(data.results[i].id)

    }
    function changeTheLink(e) {
     
        let movieIdToUse = movieNumbers[e]
        setLink(prevLink => prevLink + movieIdToUse + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits")

      
      console.log(link)
    }


    // The rendered component
    return (
      <div>
        <h2 className="headerOne">Trending Movies:</h2>
        {
          <Carousel arrows slidesPerScroll={5}
            slidesPerPage={5}
            infinite
            arrows>
            {movieImageUrls.map((images, index) => {
              return (
                <div>
                  <img onClick={(e) => changeTheLink(index)} className="largeImages" key={index} src={posterPath + images} alt="Acotd" />
                </div>)
            })}
          </Carousel>
        }</div>
    )
  }
}
export default TrendingMovies