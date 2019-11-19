import React from 'react'
import IndvidualResults from './individualResult'

function results(props){
    console.log(props.books)

return(
    props.books.map(book => {
        const title = book.volumeInfo.title;
        const description = book.volumeInfo.description;
        const imageLinks = book.volumeInfo.imageLinks;
        const authors = book.volumeInfo.authors;
        const price = book.saleInfo.price;
        return (<IndvidualResults key={book.id} title={title} description={description} authors={authors} imageLinks={imageLinks} amount={price}/>)
    })
)
}

export default results

//title, authors, description, isEbook, printType, retailPrice
