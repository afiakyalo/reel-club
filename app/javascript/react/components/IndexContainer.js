import React, { useState, useEffect } from 'react';

import ClubTile from "./ClubTile"

const IndexContainer = (props) => {
  const [ clubs, setClubs ] = useState([])

  useEffect(() => {
    fetch("/api/v1/clubs")
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
      setClubs(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const clubTiles = clubs.map(club => {
    return(
      <div className="row medium-unstack">
        <div className="column small-12 medium-4">
          <ClubTile
            key={club.id}
            clubInfo={club}
          />
        </div>
      </div>
    )
  })

  return(
    <div>
      {clubTiles}
    </div>
  )
}

export default IndexContainer;
