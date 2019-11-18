import React, { Component } from 'react'

import Header from './Components/header';
import Search from './Components/search'
import Results from './Components/results'

export class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      books: [],
      searchTerm: "",

    }
  }


  setSearchTerm(searchTermValue) {
    this.setState({
    searchTerm: searchTermValue
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget["search"].value);
    // need to use API key
    
    let searchTermValue = e.currentTarget["search"].value;
    
    this.setSearchTerm(searchTermValue);
    
      console.log('state has changed', searchTermValue)

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
    
    
    

    fetch(url)
      .then(res => res.json())
      .then(res => this.bookInfo(res))
    }
      
  

  bookInfo(res){
    return (res)
  }
  
  


  render() {
    return (
      <div>
        <Header />
        <Search handleSubmit={this.handleSubmit}/>
        <Results bookArray={this.state.books} bookInfo={this.bookInfo}/>
      </div>
    )
  }
}

export default App

