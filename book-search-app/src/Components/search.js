import React from 'react';

function Search(props){
  console.log('search',props)

    
    return (
      <form className="search-input" 
      onSubmit={e => props.handleSubmit(e)}>
        <label htmlFor="search">
          <input
            type="text" 
            onChange={e => props.searchTerm(e.target.value)} 
            name="search" 
            id="search" 
            placeholder="Great Expectations">
          </input>
        </label>
          <button type="submit" onClick={() => props.searchTerm}>Hit It!</button>
      </form>
    )
}

export default Search;