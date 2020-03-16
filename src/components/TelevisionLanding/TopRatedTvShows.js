import React, { useState } from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import landingContext from "../Landing/landingContext"

const topRatedTvShowsLink = "https://api.themoviedb.org/3/tv/top_rated?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&page=1"

// Then we'll fetch user data from this API
const topRatedTask = async () =>
  await fetch(topRatedTvShowsLink)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function ToRatedTvShows(props) {
 
  const [componentType, setLink] = useState("tv/")
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: topRatedTask })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message} Movies In Theaters`
  if (data) {
    let televisionImageUrls = []
    let televisionNumbers = []
    let trendingMoviesCount = data.results.length
    for (let i = 0; i < trendingMoviesCount; i++) {
        televisionImageUrls.push(data.results[i].poster_path);
        televisionNumbers.push(data.results[i].id)

    }


    function changeTheLink(index, contextLink, actorsId) {
      let tvShowIdToUse = televisionNumbers[index]
      contextLink = contextLink + componentType + tvShowIdToUse + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits"
      setLink(componentType)
      props.function(tvShowIdToUse)
      props.componentTypeId(componentType)
      props.setActorsId(actorsId)



    }


    // The rendered component
    return (<landingContext.Consumer>
      {passedLink => (
        <div>
          <h2 className="headerOne">Top Rated Tv Shows:</h2>
          {
            <Carousel arrows slidesPerScroll={5}
              slidesPerPage={5}
              infinite
              arrows>
              {televisionImageUrls.map((images, index) => {
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
export default ToRatedTvShows