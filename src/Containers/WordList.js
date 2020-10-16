import React from 'react'
import Word from '../Components/Word'
import WordWithListener from '../Components/WordWithListener'
import {withRouter} from 'react-router-dom'

const WordList = ({words, history, listDefineHandler, appRemoveHandler}) => {

    const list = () => {
        if(words){
            return words.map((word, index) => <Word key={index} word={word} appRemoveHandler={appRemoveHandler} />)
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

    return(
        <div className="list">
            <h1>Words & Phrases</h1>
            {console.log(history.location.pathname)}
            {history.location.pathname === "/" ? list() : listWithListeners() }
        </div>
    )

}

export default withRouter(WordList)