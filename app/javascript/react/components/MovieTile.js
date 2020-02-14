import React from "react"
import SearchBar from "./SearchBar"

const MovieTile = (props) => {
  return(
    <div>
      <SearchBar searchMovie={props.searchMovie}/>
      <h4 className="callout">Movie goes here</h4>
    </div>
  )
}

export default MovieTile;
