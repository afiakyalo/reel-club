import React from 'react'

const ClubTile = (props) => {
  const { name, description, genre } = props.clubInfo
  return(
    <div class="alert callout">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Main Genre: {genre}</p>
    </div>
  )
}

export default ClubTile;
