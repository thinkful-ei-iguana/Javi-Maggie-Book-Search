import React, { Component } from 'react'

import Header from './Components/header';
import Search from './Components/search'
import Results from './Components/results'

const apiKey = 'AIzaSyBSfgNQ9BcMTLRezh1STiiXwXnYfr6tFaQ';

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

  formatQueryString(params){
    const formatString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)

    console.log('formatString:',formatString.join('&'))
    return formatString.join('&')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget["search"].value);
    // need to use API key
    
    let searchTermValue = e.currentTarget["search"].value;
    
    this.setSearchTerm(searchTermValue);
      console.log('state has changed', searchTermValue)

      // GET https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=yourAPIKey
      //formatString:                                    q=harry potter&key=AIzaSyBSfgNQ9BcMTLRezh1STiiXwXnYfr6tFaQ



    const searchInput = this.state.searchTerm;
    const url = `https://www.googleapis.com/books/v1/volumes`
    console.log('input',searchInput)
    console.log('url is', url);
    

    const params = {
      q: searchInput,
      key: apiKey,
    }
    
    let queryString = this.formatQueryString(params)
    console.log(queryString);

    const newUrl = url + '?' + queryString;
    console.log(newUrl)
    

    fetch(newUrl)
      .then(res => res.json())
      .then(res => this.bookInfo(res))

      console.log('book:',this.bookInfo())
    }
      
  

  bookInfo(res){
    console.log(res.items)
    return null
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

