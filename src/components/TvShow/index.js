import React from 'react'
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import MaterialIcon, { colorPalette } from 'material-icons-react'



// Then we'll fetch user data from this API
const popularActorsTask = async () =>
    await fetch("https://api.themoviedb.org/3/tv/2685?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits,reviews")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())



function TvShow() {
    const posterPath = "https://image.tmdb.org/t/p/w500/"
    const { data, error, isLoading } = useAsync({ promiseFn: popularActorsTask })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        // The rendered component
        console.log(data)
        let actors = []
        let actorsCount = data.credits.cast.length
      
        let seasons = []
        let seasonsCount = data.seasons.length
        for (let i = 0; i < actorsCount; i++) {
            actors.push(data.credits.cast[i]);
           
        }

        for (let j = 0; j < seasonsCount; j++) {
            seasons.push(data.seasons[j]);
        }
      

        return (
            <div style={{ backgroundImage: data.backdrop_path }}>
                <h2 className="headerOne">{data.name}</h2>
                <img className="mainMediaImage" key={data.original_title} src={posterPath + data.poster_path} alt={data.original_title} />
                <h3 className="overView"><a href={data.homepage}>Visit their Site</a></h3>
                <div className="icons">
                    <MaterialIcon icon="favorite" size={75} color={colorPalette.pink._800} />
                    <MaterialIcon icon="bookmark" size={75} color={colorPalette.red._800} />
                    <MaterialIcon icon="star" size={75} color={colorPalette.yellow._800} />
                </div>
                <h1 className="overView">Overview:</h1>
                <h2 className="overViewText">{data.overview}</h2>
                <div className="factsDiv">
                    <h1 className="factsInfo">First Air Date:{data.first_air_date}</h1>
                    <h1 className="factsInfo">Number of Episodes:{data.number_of_episodes}</h1>
                    <h1 className="factsInfo">Number of Seasons:{data.number_of_seasons}</h1>
                </div>


                <h1 className="overView">Top Billed Cast:</h1>
                <Carousel
                    className="TvShows"
                    arrows
                    slidesPerScroll={2}
                    slidesPerPage={4}
                    infinite
                    arrows>
                    {actors.map((images, index) => {
                        return <div><img className="actorMediumImages" key={index} src={posterPath + actors[index].profile_path} alt="Actors" />
                            <hr />
                            <h3 className="whiteText">{actors[index].character}</h3>
                            <h3 className="whiteText">{actors[index].name}</h3></div>
                    })}
                </Carousel>
                    <div>
                <h1 className="overView">Seasons:</h1>
                <Carousel
                    className="TvShows"
                    arrows
                    slidesPerScroll={2}
                    slidesPerPage={4}
                    infinite
                    arrows>
                    {seasons.map((images, index) => {
                        return <div><img className="actorMediumImages" key={index} src={posterPath + seasons[index].poster_path} alt="Actor Image" />
                            <hr />
                            <h3 className="whiteText">Season :{seasons[index].season_number}</h3>
                            <h3 className="whiteText">Episode Count :{seasons[index].episode_count}</h3></div>
                           
                    })}
                </Carousel>
                </div>
            </div>
        )
    }



}

export default TvShow