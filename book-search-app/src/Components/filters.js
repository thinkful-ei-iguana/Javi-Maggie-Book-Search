import React from 'react';

export default function Filters(props) {
    
return(
    <div>
        <form onSubmit={e => props.handleSumbit(e)}>
            <label htmlFor="print-type">Print Type</label>
            <select required name="print-type" onChange={e => props.printType(e.target.value)}>
             <option value="books">books</option>
             <option value="magazines">magazines</option>
            </select>

            <label htmlFor="book-type">Book Type</label>
            <select required name="book-type" onChange={e => props.bookType(e.target.value)}>
             <option value="full">full</option>
             <option value="partial">partial</option>
             <option value="free-ebooks">free-ebooks</option>
            </select>
        </form>
    </div>
)

}