import React, { useState } from 'react'

const SearchBar = (props) => {
  const[ search, setSearch ] = useState({
    query: ""
  })

  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: search
    })
    props.searchMovie(body)
  }

  const handleClick = movie => (event) => {
    event.preventDefault()
    props.setSelectedMovie(movie)
    setSearch({
      query: ""
    })
    props.setSearchedMovies([])
  }

  const searchedMoviesList = props.searchedMovies.map((movie) => {
    return(
        <li key={movie.id}><a className="movie-list" onClick={handleClick(movie)}>{movie.title}</a></li>
    )
  })

  return(
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" name="query" value={search.query} onChange={handleChange} placeholder="Find a movie" />

        <input id="send" type="submit" value="Select" />
      </form>
      <ul>{searchedMoviesList}</ul>
    </div>
  )

}

export default SearchBar;
