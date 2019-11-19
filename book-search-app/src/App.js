import React, { Component } from 'react'

import Header from './Components/header';
import Search from './Components/search'
import Results from './Components/results'

const apiKey = 'AIzaSyBSfgNQ9BcMTLRezh1STiiXwXnYfr6tFaQ';

export class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      books: null,
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
      .then(data => this.setState({books: data}))
    
  
    }
  
 

  render() {
     
    return (
      <div>
        <Header />
        <Search handleSubmit={this.handleSubmit}/>
        {/* if this.state.books && <Results books ={this.state.books} */}
        {this.state.books && <Results books={this.state.books} />}
      </div>
    )
  }
}

export default App

