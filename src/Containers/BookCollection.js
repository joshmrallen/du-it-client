import React from 'react'
import Book from '../Components/Book'

const BookCollection = ({books, openBook}) => {

    const collection = () => {
        if(books){
            return books.map((book, index) => <Book key={index} index={index} book={book} openBook={openBook} />)
        } else {
            return "Your shelf is empty"
        }
    }

    

    return(
        <div id="collection-container">
            <h1>Your Collection</h1>
            <div className="shelf">
                {collection()}
            </div>
            <footer><a class="freepik" href='https://www.freepik.com/vectors/background'>Background vector created by vectorpocket - www.freepik.com</a></footer>
        </div>    
    )
}

export default BookCollection

// css: use a flexbox to render books onto the "shelf"
// use book image:
//      Book component will render an image with book title over the image (like a thumbnail)