import React, { Component } from 'react';

class Filters extends Component {

  render() {
    console.log('props is', this.props)
    return (
      <form
      /*onSubmit={e => this.props.handleSubmit(e)}*/
      >
        <label htmlFor="print-type">Print Type</label>
        <select name="print-type" id="print-type" onChange={(e) => {
          this.props.typePrint(e.target.value)
            .then(() => {
              this.props.handleSubmit(e);
            });
        }}>
          <option value="">None</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type">Book Type</label>
        <select name="book-type" id="book-type" onChange={(e) => {
          this.props.typeBook(e.target.value)
            .then(() => {
              this.props.handleSubmit(e);
            });
        }}>
          <option value="">No Filter</option>
          <option value="full">Full</option>
          <option value="partial">Partial</option>
          <option value="ebooks">Ebooks (free)</option>
        </select>
      </form>
    )
  }

}

// <Filters handleSubmit={this.handleSubmit} typeBook={this.filterBookType} typePrint={this.filterPrintType} />

export default Filters;