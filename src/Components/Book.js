import React from 'react'

const Book = ({book, openBook}) => {

    const clickHandler = () => {
        openBook(book)
    }

    return(
        <div className="book-face" onClick={clickHandler}>
            <h4>{book.title}</h4>
            <p>{book.author.last_name}{book.author.first_name}</p>
        </div>
    )
}

export default Book