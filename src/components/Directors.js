import React from "react";
import { directors } from "../data";


const displayDirectors = directors.map((director, index) => (
  <div key={index}>
    <h2>Name: {director.name}</h2>
    <span>Movies:</span>
    <ol>{director.movies.map((movie, index) => <li key={index}>{movie}</li> )}</ol>
  </div>
))


function Directors() {
  return <div>
    {displayDirectors}
    </div>;
}

export default Directors;
