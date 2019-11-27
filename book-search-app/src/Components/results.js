import React, { Component } from 'react';
import IndividualResults from './individualResult';
import cuid from 'cuid';

class Results extends Component {
    render() {
        console.log('results props is', this.props.books)
        return (
            <ul className="results-list">
                {this.props.books.items.map(book => {
                    let title = book.volumeInfo.title;
                    let author = book.volumeInfo.authors;
                    let description = book.volumeInfo.description;
                    let printType = book.volumeInfo.printType;
                    let thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";
                    let isEbook = book.saleInfo.isEbook;
                    return (
                        <IndividualResults key={cuid()}
                            title={title}
                            author={author}
                            description={description}
                            typePrint={printType}
                            thumbnail={thumbnail}
                            isEbook={isEbook}
                        />
                    );
                })}
            </ul>
        )
    }

}

Results.defaultProps = {
    books: {
        items: []
    }
}

export default Results

//title, authors, description, isEbook, printType, retailPrice
