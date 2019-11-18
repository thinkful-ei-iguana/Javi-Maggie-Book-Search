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

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget["search"].value);
    //need to use API key
    // const searchInput = encodeURIComponent(this.state.searchTerm);
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
    // console.log('url is', url);
    // const options = {
    //   method: 'GET',
    //   body: JSON.stringify(searchInput),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }

    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => this.bookInfo(res))

      
  }

  bookInfo(res){
    return (res)
  }
  searchTermEntered(searchTerm) {
    console.log('searchTermEntered:',searchTerm)
    // this.setState({
    //   searchTerm
    // });
  }
  


  render() {
    return (
      <div>
        <Header />
        <Search searchTerm={this.searchTermEntered} handleSubmit={this.handleSubmit}/>
        <Results bookArray={this.state.books} bookInfo={this.bookInfo}/>
      </div>
    )
  }
}

export default App

