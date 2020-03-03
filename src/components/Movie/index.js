import React from 'react'
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import MaterialIcon, { colorPalette } from 'material-icons-react'

// Then we'll fetch user data from this API
const popularActorsTask = async () =>

    await fetch("https://api.themoviedb.org/3/movie/9037?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())



function Movie(props) {
    let recievedLink = props.sentLink
    console.log(props.sentLink + "RECIEVED")

    if(props.sentLink != null)  {
        console.log("NOTNULL")
        fetch(props.sentLink)
      .then(response => response.json())
      .then(recievedData => console.log(recievedData));

      
  
    }
    

    const posterPath = "https://image.tmdb.org/t/p/w500/"
    const { data, error, isLoading } = useAsync({ promiseFn: popularActorsTask }, recievedLink)
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
        // The rendered component
        let actors = []
        let actorsCount = data.credits.cast.length
      
        for (let i = 0; i < actorsCount; i++) {
            actors.push(data.credits.cast[i]);
        }


        return (
            <div style={{ backgroundImage: data.backdrop_path }}>
                <h2 className="headerOne">{data.original_title}</h2>
                <img className="mainMediaImage" key={data.original_title} src={posterPath + data.poster_path} alt={data.original_title} />
                <h3 className="overView">{data.tagline}</h3>
                <div className="icons">
                    <MaterialIcon icon="favorite" size={75} color={colorPalette.pink._800} />
                    <MaterialIcon icon="bookmark" size={75} color={colorPalette.red._800} />
                    <MaterialIcon icon="star" size={75} color={colorPalette.yellow._800} />
                </div>
                <h1 className="overView">Overview:</h1>
                <h2 className="overViewText">{data.overview}</h2>
              
                <div className="factsDiv">
                    <h1 className="overView">Facts:</h1>
                    <h1 className="overView">Status:{data.status}</h1>
                    <h1 className="overView">Release Date:{data.release_date}</h1>
                    <h1 className="overView">Revenue:${data.revenue}</h1>
                    <h1 className="overView">Runtime:{data.runtime}</h1>
                    <h1 className="overView">Release Date:{data.release_date}</h1>
                    <h1 className="overView">Budget:${data.budget}</h1>
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
                        return <div><img className="actorMediumImages" key={index} src={posterPath + actors[index].profile_path} alt="Actor Image" />
                            <hr />
                            <h3 className="whiteText">{actors[index].character}</h3>
                            <h3 className="whiteText">{actors[index].name}</h3></div>
                    })}
                </Carousel>
            </div>
        )
    }



}

export default Movie