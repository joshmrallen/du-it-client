import React from 'react'
import {ReactReader} from 'react-reader'

const CurrentBook = (props) => {



    return(
        <div className="reader">
            {console.log(props.book)}
            <ReactReader
                url={props.book.epub_url}
                title={props.book.title}
                location={"epubcfi(/6/2[cover]!/6)"}
                locationChanged={epubcifi => console.log(epubcifi)} 
            />
        </div>
    )
}

export default CurrentBook