import React, { Component } from 'react';
import './individualResult.css';

function IndividualResults(props) {
  
    return(
      <div className="book-result">
        <h2>{props.title}</h2>
        <div className="image">
          <img src={props.thumbnail} alt="Image of book" />
        </div>
        <div className="content">
          <p>{props.author}</p>
          <p>{props.description}</p>
        </div>
        <hr></hr>
      </div>
    )
}

 

export default IndividualResults;