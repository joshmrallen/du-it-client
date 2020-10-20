import React from 'react'
import Word from '../Components/Word'
import WordWithListener from '../Components/WordWithListener'
import {withRouter} from 'react-router-dom'

const WordList = ({words, history, listDefineHandler, appRemoveHandler}) => {

    const list = () => {
        if(words){
            return words.map((word, index) => <Word key={index} index={index} word={word} appRemoveHandler={appRemoveHandler} />)
        } else {
            return "没词！快开一本书阅读一下!"
        }
    }

    const listWithListeners = () => {
        if(words){
            return words.map((word, index) => <WordWithListener key={index} word={word} listDefineHandler={listDefineHandler} appRemoveHandler={appRemoveHandler} />)
        } else {
            return "没词！快开一本书阅读一下!"
        }
    }

    const listPathStyle = {
        position: 'fixed',
        top: '60px',
        left: '50px'
    }

    const mainPathStyle = {
        position: 'fixed',
        top: '12px',
        'z-index': '1',
        margin: '0px 0px'
    }

    return(
        <div className="list">
            {/* <h1 style={history.location.pathname === "/" ? mainPathStyle : listPathStyle}>Words & Phrases</h1> */}
            {console.log(history.location.pathname)}
            {history.location.pathname === "/" ? list() : listWithListeners() }
        </div>
    )

}

export default withRouter(WordList)