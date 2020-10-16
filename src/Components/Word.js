import React from 'react'
import {withRouter} from 'react-router-dom'

const Word = ({word, history, appRemoveHandler}) => {
    
    const goToList = () => {
        history.push("/list")
    }

    const removeHandler = () => {
        console.log(word.word, "component removeHandler")
        appRemoveHandler(word)
    }

    return(
        <div className="list-word">
            <p>{word.word}</p>
            <p>{word.pinyin}</p>
            <button className="go-list-btn" onClick={goToList}>See on List</button>
            <button className="remove-word" onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default withRouter(Word)