import React from "react"
import SearchBar from "./SearchBar"

const SearchComponent = (props) => {
  return(
    <div>
      <h5>Search Movies</h5>
      <SearchBar
        searchMovie={props.searchMovie}
        searchedMovies={props.searchedMovies}
        setSelectedMovie={props.setSelectedMovie}
        setSearchedMovies={props.setSearchedMovies}
      />
    </div>
  )
}

export default SearchComponent;
