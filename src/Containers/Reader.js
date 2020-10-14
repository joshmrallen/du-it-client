import React from 'react'
import {ReactReader} from 'react-reader'
// import jianghu from '../books/jianghu.epub'
// import 'epubjs'
// import { Book } from 'epubjs'

class Reader extends React.Component {

    // const book = new Book("../books/jianghu.epub")
    
    // book.open("/Users/Josh/Flatiron/mod-5/project_planning/jianghu.epub", "epub")
    //     .then(()=>("Hello")) .open doesn't seem to be doing anything

    // console.log(book)
    
    
    // console.log(book.opened)

    // // debugger

    // console.log(book.spine)
    // console.log(book.locations)
    // console.log(book.navigation) gave uncaught in promis error
    // console.log(book.pagelist) says 'undefined'

    // let book = new Book('../books/jianghu.epub')

    // let rendition = book.renderTo("area")
    
    render(){
        return(
            <div style={{ position: "relative", height: "100%" }}>
                {/* always make sure the container has height ... according to the docs: https://github.com/gerhardsletten/react-reader */}
                <ReactReader 
                url={"../books/jianghu.epub"}
                title={"XiaoAo JiangHu"}
                location={"epubcfi(/6/2[cover]!/6)"}
                locationChanged={epubcifi => console.log(epubcifi)}
                />
            </div>
        )

    }
}

export default Reader