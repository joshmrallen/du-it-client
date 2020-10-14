import React from 'react'

const Word = ({word}) => {
    
    

    return(
        <div className="list-word">
            <p>{word.word}</p>
            <p>{word.pinyin}</p>
        </div>
    )
}

export default Word