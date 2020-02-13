import React from 'react'

const ClubTile = (props) => {
  const { name, description, genre } = props.clubInfo
  return(
    <div className="callout">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Main Genre: {genre}</p>
      <div>
        <a href="" className="button">Join</a>
      </div>
    </div>
  )
}

export default ClubTile;
