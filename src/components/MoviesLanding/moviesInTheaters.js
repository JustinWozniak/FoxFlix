import React, { useState } from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import landingContext from "../Landing/landingContext"

const moviesInTheaters = "https://api.themoviedb.org/3/discover/movie?api_key=" + process.env.REACT_APP_API_KEY + "&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"


// Then we'll fetch user data from this API
const moviesInTheatersTask = async () =>
  await fetch(moviesInTheaters)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function MoviesInTheaters(props) {
 
  const [componentType, setLink] = useState("movie/")
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: moviesInTheatersTask })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message} Movies In Theaters`
  if (data) {
    console.log(data)
    let movieImageUrls = []
    let movieNumbers = []
    let trendingMoviesCount = data.results.length
    for (let i = 0; i < trendingMoviesCount; i++) {
      movieImageUrls.push(data.results[i].poster_path);
      movieNumbers.push(data.results[i].id)

    }


    function changeTheLink(index, contextLink, actorsId) {
      let movieIdToUse = movieNumbers[index]
      contextLink = contextLink + componentType + movieIdToUse + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits"
      setLink(componentType)
      props.function(movieIdToUse)
      props.componentTypeId(componentType)
      props.setActorsId(actorsId)



    }


    // The rendered component
    return (<landingContext.Consumer>
      {passedLink => (
        <div>
          <h2 className="headerOne">Movies In Theaters:</h2>
          {
            <Carousel arrows slidesPerScroll={5}
              slidesPerPage={5}
              infinite
              arrows>
              {movieImageUrls.map((images, index) => {
                return (
                  <div key={"dxiv"}>
                    <img key={"d"} onClick={(actorsId) => changeTheLink(index, passedLink, actorsId)} className="largeImages" key={"fd"} src={posterPath + images} alt="Acotd" />
                  </div>)
              })}
            </Carousel>
          }</div>
      )}
    </landingContext.Consumer>


    )
  }
}
export default MoviesInTheaters