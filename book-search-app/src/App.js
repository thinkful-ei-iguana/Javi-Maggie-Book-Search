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
      printType: null,
      booktype: null,
      loading: false,
      error: null,
    
    }
  }


  formatQueryString(params){
    const formatString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)

    return formatString.join('&')
  }

  handleSubmit = (e) => {
    e.preventDefault();


    const searchInput = e.currentTarget["search"].value;
    const url = `https://www.googleapis.com/books/v1/volumes`

    const params = {
      q: searchInput,
      key: apiKey,
    }
    
    let queryString = this.formatQueryString(params)
  
    const newUrl = url + '?' + queryString;
  

    fetch(newUrl)
      .then(res => res.json())
      .then(data => this.bookInfo(data))
    
  
    }

  bookInfo(data){
    console.log('data:',data);
    console.log('data author:',data.items[0].volumeInfo.authors);
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

