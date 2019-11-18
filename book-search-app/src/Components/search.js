import React, { Component } from 'react';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    //need to use API key
    const searchInput = encodeURIComponent(this.state.searchTerm);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
    console.log('url is', url);
    const options = {
      method: 'GET',
      body: JSON.stringify(searchInput),
      headers: {
        "Content-Type": "application/json"
      }
    }
  }

  searchTermEntered(searchTerm) {
    this.setState({
      searchTerm
    });
  }
  
  
  render() {
    console.log('this is searchTerm', this.state.searchTerm);
    return (
      <form className="search-input" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="search">
          <input 
            type="text" 
            onChange={e => this.searchTermEntered(e.target.value)} 
            name="search" 
            id="search" 
            placeholder="Great Expectations">
          </input>
        </label>
          <button type="submit" onClick={() => this.searchTermEntered}>Hit It!</button>
      </form>
    )
  }
}

export default Search;