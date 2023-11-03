import React from "react";
import { movies } from "../data";


function Movies() {

const display = movies.map((movie, index) => (
  <div key={index}>
    <h2>Name: {movie.name}</h2>
    <span>Time: {movie.time}</span>
    <p>Genres: </p>
    <ul>{movie.genres.map((genre, index) => <li key={index}>{genre}</li> )}</ul>
  </div>
))

  return <div>
    {display}
    </div>
}

export default Movies;

  
  