import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';

const ClubTile = (props) => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const { id, name, description, genre, users, current_user} = props.clubInfo


  const handleClick = (event) => {
    event.preventDefault()
    props.addMember(id)
    setShouldRedirect(true)
  }

  let classes = "button"
  let value = "Join"

  users.forEach((user) => {
    if (user.id === current_user.id) {
      classes = "alert button"
      value = "Leave"
    }
  })

  if (shouldRedirect) {
   return <Redirect to={`/clubs/${id}`}/>
  }

  return(
    <Link to={`/clubs/${id}`}>
      <div className="callout club">
        <h3 id="name">{name}</h3>
        <p id="description">{description}</p>
        <p id="genre">Main Genre: {genre}</p>
        <div>
          <input onClick={handleClick} placeholder={value} className={classes}></input>
        </div>
      </div>
    </Link>
  )
}

export default ClubTile;
