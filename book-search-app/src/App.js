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

    }
  }


  formatQueryString = (params) => {
    const formatString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)

    console.log('formatString:',formatString.join('&'))
    return formatString.join('&')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget["search"].value);
    // need to use API key
    
    let searchTermValue = e.currentTarget["search"].value;

    
        // this.setSearchTerm(searchTermValue);
    //   console.log('state has changed', searchTermValue)


    // const searchInput = this.state.searchTerm;
    const url = `https://www.googleapis.com/books/v1/volumes`
    // console.log('input',searchInput)
    console.log('url is', url);
    

    const params = {
      q: searchTermValue,
      key: apiKey,
    }
    
    let queryString = this.formatQueryString(params)
    console.log(queryString);

    const newUrl = url + '?' + queryString;
    console.log(newUrl)
    

    fetch(newUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        }, () => {
          this.bookInfo(data);
        });
      })
      .catch(e => console.log('something is wrong:', e));
    }

  bookInfo(data){
    // data = this.state.books;
    return null;
  }
  

  render() {
  
    return (
      <div>
        <Header />
        <Search handleSubmit={this.handleSubmit}/>
        <Results bookArray={this.state.books}/>
      </div>
    )
  }
}

export default App

