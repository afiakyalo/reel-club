import React, { useEffect, useState } from 'react'

const SearchBar = (props) => {
  const[ search, setSearch ] = useState("")

  const handleChange = (event) => {
    const newSearchString = event.target.value
    setSearch(newSearchString)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.searchMovie(search)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Search Movies</label>
      <input type="text" name="searchString" value={search} onChange={handleChange} />

      <input type="submit" value="Submit" />
    </form>
  )

}

export default SearchBar;
