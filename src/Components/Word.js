import React from 'react'
import {withRouter} from 'react-router-dom'

const Word = ({word, history}) => {
    
    const goToList = () => {
        history.push("/list")
    }

    return(
        <div className="list-word" onClick={goToList}>
            <p>{word.word}</p>
            <p>{word.pinyin}</p>
        </div>
    )
}

export default withRouter(Word)