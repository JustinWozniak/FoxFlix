import React, { Component } from 'react';
import axios from 'axios';
import MaterialIcon, { colorPalette } from 'material-icons-react'
import Carousel from '@brainhubeu/react-carousel';

let tvShowLink = ""
const posterPath = "https://image.tmdb.org/t/p/w500/"

class TvShow extends Component {
  state = {
    number: [0],
    tvShowNumber: [],
    original_title: [],
    poster_path: [],
    tagline: [],
    overview: [],
    status: [],
    release_date: [],
    number_of_episodes: [],
    last_episode_to_air: [],
    next_episode_to_air: [],

    //actors in the movie
    cast:[],
    actorsObject:[]
  }
  componentDidMount() {
    tvShowLink = this.props.value
    console.log(tvShowLink + "KEY")
    const API_URL = tvShowLink
    console.log(API_URL + "URL")
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          users: data,
          original_title: data.original_name,
          poster_path: data.poster_path,
          homepage: data.homepage,
          overview: data.overview,
          status: data.status,
          first_air_date: data.first_air_date,
          number_of_episodes: data.number_of_episodes,
          last_episode_to_air: data.last_episode_to_air.air_date,
          next_episode_to_air: data.next_episode_to_air.air_date,

          //actors
          credits:data.credits.cast
        })
        let tvShowObject = Object.values(this.state.users);
        let actorsObject = Object.values(this.state.credits);
        this.setState({ info: tvShowObject })
        this.setState({ tvShowNumber: this.props.value })
        this.setState({ actorsObject: actorsObject })
        tvShowLink = this.props.value
      })
  }


  render() {
    tvShowLink = this.state.tvShowNumber
    return (
      <div>
        {this.state.number.map((user) => (
          <div>
            <h2 className="headerOne" key={this.state.original_title}>{this.state.original_title}</h2>
            <img className="mainMediaImage" key={this.state.original_title} src={posterPath + this.state.poster_path} alt={this.state.original_title} />
            <a href={this.state.homepage} h3 className="overView">View Homepage</a>
            <div className="icons">
              <MaterialIcon icon="favorite" size={75} color={colorPalette.pink._800} />
              <MaterialIcon icon="bookmark" size={75} color={colorPalette.red._800} />
              <MaterialIcon icon="star" size={75} color={colorPalette.yellow._800} />
            </div>
            <h1 className="overView" key={this.state.number}>Overview:</h1>
            <h2 className="overViewText" key={this.state.overview}>{this.state.overview}</h2>
            <div className="factsDiv" key={this.state.original_title}>
              <h1 className="overView" key={this.state.original_title}>Facts:</h1>
              <h1 className="overView" key={this.state.status}>Status:{this.state.status}</h1>
              <h1 className="overView" key={this.state.first_air_date}>Release Date:{this.state.first_air_date}</h1>
              <h1 className="overView" key={this.state.number_of_episodes}>Number of Episodes: {this.state.number_of_episodes}</h1>
              <h1 className="overView" key={this.state.last_episode_to_air}>Last Episode to Air: {this.state.last_episode_to_air}</h1>
              <h1 className="overView" key={this.state.next_episode_to_air}>Next Episode to Air: {this.state.next_episode_to_air}</h1>
            </div>
          
          <h1 className="overView">Top Billed Cast:</h1>
                <Carousel
                className="TvShows"
                    arrows
                    slidesPerScroll={2}
                    slidesPerPage={4}
                    infinite
                    arrows>
                    {this.state.actorsObject.map((index) => {
                        return <div><img className="actorMediumImages" key={index} src={posterPath + index.profile_path} alt="Actor Image" />
                            <hr />
                            <h3 className="whiteText">{index.character}</h3>
                            <h3 className="whiteText">{index.name}</h3></div>
                    })}
                </Carousel>
                </div>
        ))}
      </div>
    )
  }

}
export default TvShow