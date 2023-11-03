import React from "react";
import { actors } from "../data";

function Actors() {


  const displayActors = actors.map((actor,index) => (
    <div key={index}>
      <h2>Name: {actor.name}</h2>
      <span>Movies:</span>
      <ul>{actor.movies.map((movie, index) => <li key={index}>{movie}</li> )}</ul>
    </div>
  ))


  return <div>{displayActors}</div>;
}

export default Actors;
