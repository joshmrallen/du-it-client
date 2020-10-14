import React from 'react'
import {ReactReader} from 'react-reader'

const CurrentBook = ({epub_url, title}) => {



    return(
        <>
            <ReactReader
                url={epub_url}
                title={title}
                location={"epubcfi(/6/2[cover]!/6)"}
                locationChanged={epubcifi => console.log(epubcifi)} 
            />
        </>
    )
}

export default CurrentBook