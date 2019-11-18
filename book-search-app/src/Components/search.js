import React from 'react';

function Search(props){
  console.log('search',props)

    
    return (
      <form className="search-input" 
      onSubmit={e => props.handleSubmit(e)}>
        <label htmlFor="search">
          <input
            type="text" 
            name="search" 
            id="search" 
            placeholder="Great Expectations">
          </input>
        </label>
          <button type="submit" >Hit It!</button>
      </form>
    )
}

export default Search;