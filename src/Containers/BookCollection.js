import React from 'react'
import Book from '../Components/Book'

const BookCollection = ({books}) => {

    const collection = () => {
        if(books){
            return books.map(book => <Book props={book} />)
        } else {
            return "Your shelf is empty"
        }
    }

    // const book = new Book("/Users/Josh/Flatiron/mod-5/project_planning/笑傲江湖.epub", {})

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