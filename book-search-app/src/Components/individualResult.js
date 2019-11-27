import React, { Component } from 'react';
import './individualResult.css';

function IndividualResults(props) {

  return (
    <div className="book-result" aria-live="assertive">
      <h3>{props.title}</h3>
      <div className="image">
        <img src={props.thumbnail} />
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