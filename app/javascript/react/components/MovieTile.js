import React from "react"

const MovieTile = (props) => {
  const { movie, errors } = props
  let title, synopsis, date, rating, image;

  if (movie) {
    title = movie.title,
    synopsis = movie.synopsis,
    date = movie.release_date,
    rating = movie.rating,
    image = `http://image.tmdb.org/t/p/w185/${movie.poster}`
  } else {
    image = `https://reel-club-development.s3.amazonaws.com/uploads/poster/default_poster.png`,
    title = "No movie has been selected",
    synopsis = "The club owner should search for a title below."
  }

  const handleClick = (event) => {
    event.preventDefault()
    props.saveMovie(movie)
  }

  return(
    <>
      <h5>{errors}</h5>
      <img className="poster overlay-fade-in" src={image}/>
      <div className="movie-details">
        <span id="title">{title}</span>
        <p id="date">Release date: {date}</p>
        <p id="synopsis">{synopsis}</p>
        <p id="rating">Rating: {rating}</p>
      </div>
      <input onClick={handleClick} type="submit" value="save"/>
    </>
  )
}

export default MovieTile;
