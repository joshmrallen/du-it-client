import React from 'react'
import {ReactReader} from 'react-reader'
import {withRouter} from 'react-router-dom'
import Definition from '../Components/Definition';

class CurrentBook extends React.Component{

    selectHandler = () => {
        // const word = window.getSelection().toString()
        // debugger
        var iframe = document.querySelector('iframe');
        // console.log("iframe - hope this is it!", iframe)
        var idoc = iframe.contentWindow || iframe.contentDocument.defaultView; // ie compatibilityidoc.getSelection()
        // console.log("idoc: ", idoc)
        const word = idoc.getSelection().toString()
        // console.log("Selected word: ", word)
        if(word !== ""){
            this.props.selectHandler(word)
        } else {
            console.log("Nothing was selected")
        }

        // this.props.selectHandler(word)
    }

    getRendition = (rendition) => {
        // debugger
        console.log(rendition)
        this.props.getRendition(rendition)
        // console.log(rendition.selected)
    }

    locationHandler = (epubcifi) => {
        // this.setState(()=>({
        //     location: epubcifi
        // }))
        window.localStorage.setItem('location', epubcifi)
        this.props.locationChanged(epubcifi)
    }

    tocHandler = (something) => {
        console.log(something)
    }

    clickHandler = () => {
        console.log("Looking up:", this.props.selectedWord)
        if(this.props.selectedWord !== ""){
            this.props.lookUpHandler()
        }//you can remove the conditional once you delete the blank space word currently in the words array of the test user
    }

    lookUpModal = () => {
        return <Definition word={this.props.lookUp} resetDefTerm={this.props.resetDefTerm} />
    }

    render(){

        console.log(this.props.selectedWord)
        console.log(this.props.lookUp)
        // console.log(this.props.location) this is actually a withRouter property which is overriding the props from App I was sending

        return(
            <div className="reader" onMouseUp={this.selectHandler} >
                {this.lookUpModal()}
                <button id="look-up" onClick={this.clickHandler}>Look Up Selection</button>
                {this.props.book ? <>
                    {/* {console.log(this.props.book)} */}
                    <ReactReader
                        url={this.props.book.epub_url}
                        title={this.props.book.title}
                        location={this.props.location !== window.localStorage.getItem('location') ? window.localStorage.getItem('location') : this.state.location }
                        locationChanged={this.locationHandler} 
                        getRendition={this.getRendition}
                        tocChanged={this.tocHandler}
                        // handleTextSelected={selectHandler}
                    />
                </> : this.props.history.push("/")}
                {/* Some text so many things we can select from this text. */}
            </div>
        )
    }
}

export default withRouter(CurrentBook)


// onMouseUp={selectHandler}
// onSelect={selectHandler}
// onMouseUp={selectHandler} onClick={clickHandler}

//"epubcfi(/6/2[cover]!/6)"