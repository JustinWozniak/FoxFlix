import React, { useState } from "react"
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import landingContext from "../Landing/landingContext"

const API_LINK = "https://api.themoviedb.org/3/"
// Then we'll fetch user data from this API
const trendingTvTask = async () =>
  await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=" + process.env.REACT_APP_API_KEY)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())



function TrendingTvShows(props) {
  console.log(props)
  const [componentType, setComponentType] = useState("tv/")
  const posterPath = "https://image.tmdb.org/t/p/w500/"
  const { data, error, isLoading } = useAsync({ promiseFn: trendingTvTask })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data) {
    let tvShowImageUrls = []
    let tvShowNumbers = []
    let trendingTvShowsCount = data.results.length
    for (let i = 0; i < trendingTvShowsCount; i++) {
      tvShowImageUrls.push(data.results[i].poster_path);
      tvShowNumbers.push(data.results[i].id)
  
    }
   

    function changeTheLink(index, contextLink) {
      let tvShowIdToUse = tvShowNumbers[index]
      console.log(tvShowIdToUse)
      contextLink = API_LINK + componentType + tvShowIdToUse + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits"
      console.log(contextLink)
      setComponentType(componentType)
      props.function(contextLink)
      props.componentTypeId(componentType)
     
    }


    // The rendered component
    return (<landingContext.Consumer>
      {passedLink => (
        <div>
          <h2 className="headerOne">Trending Tv Shows:</h2>
          {
            <Carousel arrows slidesPerScroll={5}
              slidesPerPage={5}
              infinite
              arrows>
              {tvShowImageUrls.map((images, index) => {
                return (
                  <div key={"dxiv"}>
                    <img key={"d"} onClick={(imageNumber) => changeTheLink(index, passedLink)} className="largeImages" key={"fd"} src={posterPath + images} alt="Acotd" />
                  </div>)
              })}
            </Carousel>
          }</div>
      )}
    </landingContext.Consumer>


    )
  }
}

export default TrendingTvShows