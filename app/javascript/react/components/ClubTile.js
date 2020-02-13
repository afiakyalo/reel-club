import React from 'react'

const ClubTile = (props) => {
  const { name, description, genre } = props.clubInfo
  return(
    <div className="callout">
      <h3 id="name">{name}</h3>
      <p id="description">{description}</p>
      <p id="genre">Main Genre: {genre}</p>
      <div>
        <a href="" className="button">Join</a>
      </div>
    </div>
  )
}

export default ClubTile;
