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
    console.log('handleSubmit is working');
  }

  searchTermEntered(searchTerm) {
    
    this.setState = ({
      searchTerm
    });
  }
  
  
  render() {
    console.log('searchTerm in render', this.state.searchTerm);
    return (
      <form className="search-input" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="search">
          <input type="text" onChange={e => this.searchTermEntered(e.target.value)} name="search" id="search" placeholder="Great Expectations">
          </input>
        </label>
          <button type="submit" onClick={this.searchTermEntered}>Hit It!</button>
      </form>
    )

  }



}

export default Search;