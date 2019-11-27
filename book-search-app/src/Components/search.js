import React from 'react';
import './search.css';

function Search(props) {
  console.log('search', props)


  return (
    <form className="search-input"
      onSubmit={e => props.handleSubmit(e)}
    >
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Great Expectations"
          onChange={e => props.setSearchInput(e.target.value)}
        >

        </input>
      </label>
      <button type="submit">Hit It!</button>
    </form>
  )
}

Search.defaultProps = {
  "book type": "full",
  "print filter": "books"
}

export default Search;