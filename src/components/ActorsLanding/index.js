import React, { Component } from 'react';
import axios from 'axios';
import MaterialIcon, { colorPalette } from 'material-icons-react'
import Carousel from '@brainhubeu/react-carousel';
import PopularActors from '../PopularActors'

const posterPath = "https://image.tmdb.org/t/p/w500/"

let actorsIdNumber = ""
class ActorsLanding extends Component {
    state = {

    }

    render() {
        return (
            <div>
            <h1>Here at FoxFlix, we're WILD about todays celeberities!</h1>
            <PopularActors />
            </div>
        )
    }
}
export default ActorsLanding