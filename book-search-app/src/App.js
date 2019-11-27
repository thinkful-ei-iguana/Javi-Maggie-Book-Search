import React, { Component } from 'react';
import Header from './Components/header';
import Search from './Components/search';
import Results from './Components/results';
import Filters from './Components/filters';

const apiKey = 'AIzaSyBSfgNQ9BcMTLRezh1STiiXwXnYfr6tFaQ';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        items: []
      },
      bookType: null,
      printType: null,
      searchTerm: ""
    }
  }


  setSearchInput = (input) => {
    return new Promise((resolve) => {
      this.setState({ searchTerm: input }, resolve);
    });
  }

  formatQueryString(params) {
    const formatString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)

    return formatString.join('&')
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://www.googleapis.com/books/v1/volumes`

    let params = {
      q: this.state.searchTerm,
      key: apiKey
    };

    if (this.state.printType) {
      params.printType = this.state.printType;
    }
    if (this.state.bookType) {
      params.filter = this.state.bookType;
    }

    let queryString = this.formatQueryString(params);

    const newUrl = url + '?' + queryString;
    console.log(newUrl);

    fetch(newUrl)
      .then(res => res.json())
      .then(data => {
        return new Promise((resolve) => {
          this.setState({ books: data }, () => {
            resolve();
          });
        });
      })
      .catch(e => { console.log('something is wrong:', e) })
  }

  handlePrintType = (input) => {
    return new Promise((resolve) => {
      this.setState({ printType: input }, resolve)
    });
  }

  handleBookType = (input) => {
    return new Promise((resolve) => {
      this.setState({ bookType: input }, resolve)
    });
  }


  render() {
    console.log('books is', this.state.books);
    return (
      <div>
        <Header />
        <Search handleSubmit={this.handleSubmit} setSearchInput={this.setSearchInput} />
        <Filters handleSubmit={this.handleSubmit} typeBook={this.handleBookType} typePrint={this.handlePrintType} />
        {this.state.books && <Results books={this.state.books} />}
      </div>
    )
  }
}

export default App

