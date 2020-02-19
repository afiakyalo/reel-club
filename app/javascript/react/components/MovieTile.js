import React from "react"

const MovieTile = (props) => {
  let movie
  let title
  let synopsis
  let release_date
  if(props.movie) {
    movie = props.movie,
    title = props.movie.title,
    synopsis = props.movie.synopsis,
    release_date = props.movie.release_date
  }

  const handleClick = (event) => {
    event.preventDefault()
    props.saveMovie(movie)
  }

  return(
    <>
      <h3>Movie of the Week</h3>
      <p>{title}</p>
      <input onClick={handleClick} type="submit" value="save"/>
    </>
  )
}

export default MovieTile;
