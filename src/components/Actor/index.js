import React from 'react'
import { useAsync } from 'react-async';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import MaterialIcon, { colorPalette } from 'material-icons-react'



// Then we'll fetch user data from this API
const popularActorsTask = async () =>

    await fetch("https://api.themoviedb.org/3/person/31?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())



function Actor() {
    // function searchByKeyword() {
    //     var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
    //     for(var i in results.items) {
    //       var item = results.items[i];
    //       Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    //     }
    //   }



    const posterPath = "https://image.tmdb.org/t/p/w500/"
    const { data, error, isLoading } = useAsync({ promiseFn: popularActorsTask })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data) {
       
        // The rendered component
        let actor = data
        let actorsCredits = []
        let actorsCreditCount = data.credits.cast.length
        for (let i = 0; i < actorsCreditCount; i++) {
            actorsCredits.push(data.credits.cast[i]);
        }



        return (
            <div style={{ backgroundImage: posterPath + actor.profile_path }}>
                <h2 className="headerOne">{actor.name}</h2>
                <img className="mainMediaImage" key={data.original_title} src={posterPath + actor.profile_path} alt={data.original_title} />
                <h3 className="overView"><a href={data.homepage}>Visit their Site</a></h3>
                <div className="icons">
                    <MaterialIcon icon="favorite" size={75} color={colorPalette.pink._800} />
                    <MaterialIcon icon="bookmark" size={75} color={colorPalette.red._800} />
                    <MaterialIcon icon="star" size={75} color={colorPalette.yellow._800} />
                </div>
                <h1 className="overView">Place of Birth: {actor.place_of_birth}</h1>
                <h1 className="overView">Biography: {actor.biography}</h1>
                <h2 className="overViewText">{data.overview}</h2>
              
    
                <h1 className="overView">Known For: </h1>
                <Carousel
                className="TvShows"
                    arrows
                    slidesPerScroll={2}
                    slidesPerPage={4}
                    infinite
                    arrows>
                    {actorsCredits.map((images, index) => {
                        return <div><img className="actorMediumImages" key={index} src={posterPath + actorsCredits[index].poster_path} alt="Actor Image" />
                            <hr />
                            <h3 className="whiteText">{actorsCredits[index].character}</h3>
                            <h3 className="whiteText">{actorsCredits[index].name}</h3></div>
                    })}
                </Carousel>
            </div>
        )
    }



}

export default Actor