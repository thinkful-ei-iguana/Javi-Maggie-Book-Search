import React, { Component } from 'react'
import IndividualResults from './individualResult';

function Results(props) {

    return (
        <ul className="results-list">
            {props.bookArray.map((book, index) => {
                return (
                    <IndividualResults key={index}
                                        title={props.bookArray[index].volumeInfo.title}
                                        author={props.bookArray[index].volumeInfo.authors}
                                        description={props.bookArray[index].volumeInfo.description}
                                        printType={props.bookArray[index].volumeInfo.printType}
                                        thumbnail={props.bookArray[index].volumeInfo.imageLinks.thumbnail}
                                        isEbook={props.bookArray[index].saleInfo.isEbook}
                    />
                )
            })}
        </ul>
    )

}

export default Results

//title, authors, description, isEbook, printType, retailPrice
