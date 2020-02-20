import React from "react"

const MovieTile = (props) => {
  const { movie } = props
  let movieobj, title, synopsis, release_date, rating, image;

  if(movie) {
    title = movie.title,
    synopsis = movie.synopsis,
    release_date = movie.release_date
    rating = movie.rating
    image = movie.poster
  }

  const handleClick = (event) => {
    event.preventDefault()
    props.saveMovie(movie)
  }

  return(
    <>
      <h3>Movie of the Week</h3>
      <img src={`http://image.tmdb.org/t/p/w185/${image}`}/>
      <input onClick={handleClick} type="submit" value="save"/>
    </>
  )
}

export default MovieTile;
