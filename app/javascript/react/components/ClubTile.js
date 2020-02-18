import React from 'react'
import { Link } from 'react-router-dom';

const ClubTile = (props) => {
  const { id, name, description, genre } = props.clubInfo
  return(
    <Link to={`/clubs/${id}`}>
      <div className="callout">
        <h3 id="name">{name}</h3>
        <p id="description">{description}</p>
        <p id="genre">Main Genre: {genre}</p>
        <div>
          <button href="" className="button">Join</button>
        </div>
      </div>
    </Link>
  )
}

export default ClubTile;
