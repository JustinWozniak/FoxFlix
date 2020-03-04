import React, { Component } from 'react';
import axios from 'axios';
import MaterialIcon, { colorPalette } from 'material-icons-react'

let movieKey = 6666
const posterPath = "https://image.tmdb.org/t/p/w500/"

class Movie extends Component {
  state = {
    number: [0],
    movieNumber: [],
    original_title: [],
    poster_path: [],
    tagline: [],
    overview: [],
    status: [],
    release_date: [],
    revenue: [],
    runtime: [],
    budget: []
  }
  componentDidMount() {
    movieKey = this.props.value
    const API_URL = "https://api.themoviedb.org/3/movie/" + movieKey + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&append_to_response=credits"

    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({
          users: data,
          original_title: data.original_title,
          poster_path: data.poster_path,
          tagline: data.tagline,
          overview: data.overview,
          status: data.status,
          release_date: data.release_date,
          revenue: data.revenue,
          runtime: data.runtime,
          budget: data.budget
        })

        let movieObject = Object.values(this.state.users);
        this.setState({ info: movieObject })
        this.setState({ movieNumber: this.props.value })
        movieKey = this.props.value
      })
  }


  render() {
    movieKey = this.state.movieNumber
    return (
      <div>
        {this.state.number.map((user) => (
          <div>
            <h2 className="headerOne" key={this.state.original_title}>{this.state.original_title}</h2>
            <img className="mainMediaImage" key={this.state.original_title} src={posterPath + this.state.poster_path} alt={this.state.original_title} />
            <h3 className="overView" key={this.state.tagline}>{this.state.tagline}</h3>
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
              <h1 className="overView" key={this.state.release_date}>Release Date:{this.state.release_date}</h1>
              <h1 className="overView" key={this.state.revenue}>Revenue:${this.state.revenue}</h1>
              <h1 className="overView" key={this.state.runtime}>Runtime:{this.state.runtime}</h1>
              <h1 className="overView" key={this.state.budget}>Budget:${this.state.budget}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }

}
export default Movie