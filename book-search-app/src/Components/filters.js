import React from 'react';

export default function Filters(props) {
    console.log(props)
return(
    <div>
        <form onSubmit={e => props.handleSumbit(e)}>
            <label htmlFor="print-type">Print Type</label>
            <select name="print-type" onChange={e => props.printType(e.target.value)}>
            <option value=""></option>
             <option value="book">book</option>
             <option value="magazines">magazines</option>
            </select>

            <label htmlFor="book-type">Book Type</label>
            <select name="book-type" onChange={e => props.printType(e.target.value)}>
            <option value=""></option>
             <option value="ebooks">ebooks</option>
             <option value="free-ebooks">free-ebooks</option>
            </select>
        </form>
    </div>
)

}