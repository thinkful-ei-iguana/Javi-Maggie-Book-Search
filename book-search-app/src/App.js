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

    this.setState({
      searchTerm: searchTermValue
      }, () => {
        // this.setSearchTerm(searchTermValue);
    //   console.log('state has changed', searchTermValue)


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
      .then(data => this.bookInfo(data))
      }
      );
  
    }

  bookInfo(data){
    console.log(data);
    console.log(data.items[0].volumeInfo.authors);
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

