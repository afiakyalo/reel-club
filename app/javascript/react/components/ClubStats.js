import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const ClubStats = (props) => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    props.addMember()
    setShouldRedirect(true)
  }

  let classes = "button"
  let value = "Join"

  props.members.forEach((user) => {
    if (user.id === props.clubInfo.current_user.id) {
      classes = "alert button"
      value = "Leave"
    }
  })

  if (shouldRedirect) {
   return <Redirect to={`/clubs`}/>
  }

  return(
    <div>
      <input onClick={handleClick} className={classes} placeholder={value}></input>
    </div>
  )
}

export default ClubStats;
