import React from 'react';

export default function IndividualResults(props){
// console.log(props)
  
return(
<section>
      <h3 className="book-title">{props.title}</h3>
      <p className="author-title">Author: {props.authors}</p>
      <p className="price-tag">Price: {props.amount}</p>
      <p className="description">{props.description}</p>
      <img src={props.imageLinks.smallThumbnail} alt={`The cover of ${ props.title }`}/>
  </section>

)

}
