import React from 'react'

const Book = ({index, book, openBook}) => {

    const clickHandler = () => {
        openBook(book, index)
    }

    return(
        <div className="book-face" onClick={clickHandler}>
            <div className="book-cover">
                <h4>{book.title}</h4>
                <p>{book.author.last_name}{book.author.first_name}</p>
            </div>
        </div>
    )
}

export default Book