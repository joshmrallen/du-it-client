import React from 'react'
import Book from '../Components/Book'

const BookCollection = ({books, openBook}) => {

    const collection = () => {
        if(books){
            return books.map((book, index) => <Book key={index} book={book} openBook={openBook} />)
        } else {
            return "Your shelf is empty"
        }
    }

    

    return(
        <div className="shelf">
            {collection()}
        </div>
    )
}

export default BookCollection

// css: use a flexbox to render books onto the "shelf"
// use book image:
//      Book component will render an image with book title over the image (like a thumbnail)