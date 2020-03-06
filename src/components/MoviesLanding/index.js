import React, { Component } from 'react';
import axios from 'axios';
import MaterialIcon, { colorPalette } from 'material-icons-react'
import Carousel from '@brainhubeu/react-carousel';

const posterPath = "https://image.tmdb.org/t/p/w500/"

class MoviesLanding extends Component {
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
        budget: [],
    
    }

    componentDidMount() {
        const API_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=" + process.env.REACT_APP_API_KEY

        const url = `${API_URL}`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                console.log(data)
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
                    budget: data.budget,

                })
         let movieObject = Object.values(this.state);
                console.log(movieObject)
            })
    }

    render() {
        return (
         
      <div>
      {this.state.number.map((user) => (
        <div>
          <h2>{this.state.original_title}</h2>
        </div>
      ))}
    </div>
  )
}

}
export default MoviesLanding