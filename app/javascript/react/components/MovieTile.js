import React from "react"

const MovieTile = (props) => {
  const { movie } = props
  let title, synopsis, release_date, rating, image;

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
      <h5>Movie of the Week</h5>
      <img className="poster" src={`http://image.tmdb.org/t/p/w185/${image}`}/>
      <div>
        <span id="title">{title}</span>
        <p id="synopsis">{synopsis}</p>
        <p id="rating">{rating}</p>
        <p id="date">{release_date}</p>
      </div>
      <input onClick={handleClick} type="submit" value="save"/>
    </>
  )
}

export default MovieTile;
