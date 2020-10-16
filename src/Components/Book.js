import React from 'react'

const Book = ({index, book, openBook}) => {

    const clickHandler = () => {
        openBook(book, index)
    }

    return(
        <div className="book-face" onClick={clickHandler}>
            <h4>{book.title}</h4>
            <p id="author">{book.author.last_name}{book.author.first_name}</p>
        </div>
    )
}

export default Book