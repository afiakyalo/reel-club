import React, { useEffect, useState } from "react"

import MemberTile from "./MemberTile"
import MovieTile from "./MovieTile"
import DiscussionBoard from "./DiscussionBoard"
import ClubStats from "./ClubStats"
import SearchBar from "./SearchBar"


const ClubContainer = (props) => {
  const[ club, setClub ] = useState({})
  const[ members, setMembers ] = useState([])
  const[ movie, setMovie ] = useState({})
  const[ searchedMovies, setSearchedMovies ] = useState([])
  const[ clubMovies, setClubMovies ] = useState([])
  const[ errors, setErrors ] = useState("")

  let clubId = props.match.params.id

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(`/api/v1/clubs/${clubId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(clubData => {
      setClub(clubData)
      setMembers(clubData.users)
      setClubMovies(clubData.movies)
      setMovie(clubData.movies[clubData.movies.length - 1])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  },[])

  const searchMovie = (formPayload) => {
    fetch('/api/v1/movies/search', {
      method: 'POST',
      body: formPayload,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setSearchedMovies(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const memberTiles = members.map((member) => {
    return(
      <MemberTile
        key={member.id}
        id={member.id}
        username={member.username}
        city={member.city}
        state={member.state}
        description={member.description}
      />
    )
  })

  const saveMovie = (movie) => {
   fetch(`/api/v1/clubs/${clubId}/movies`, {
     credentials: 'same-origin',
     method: "POST",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(movie)
   })
   .then(response => {
     if (response.ok) {
       return response
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
       error = new Error(errorMessage)
       throw error
     }
   })
   .then(response => response.json())
   .then(response => {
     if (response.movie) {
       setClubMovies([...clubMovies, response.movie])
     } else {
       setErrors(response.error)
     }
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
 }


  const setSelectedMovie = (movie) => {
    setMovie(movie)
  }

  return(
    <div>
      <h3>{club.name}</h3>

      <div className="grid-x">
        <div className="movie-tile">
          <MovieTile
            movie={movie}
            saveMovie={saveMovie}
            key={movie.id}
            errors={errors}
          />
        </div>

        <div className="cell small-11 large-8 board callout">
          <DiscussionBoard />
        </div>

        <div className="cell small-11 large-3 members callout">
          <h5>Members</h5>
          {memberTiles}
        </div>

        <div className="cell small-11 large-3 board callout">
          <SearchBar
            searchMovie={searchMovie}
            searchedMovies={searchedMovies}
            setSelectedMovie={setSelectedMovie}
            setSearchedMovies={setSearchedMovies}
          />
        </div>

        <div className="cell small-11 large-8 board callout">
          <ClubStats />
        </div>

      </div>
    </div>
  )
}

export default ClubContainer;
