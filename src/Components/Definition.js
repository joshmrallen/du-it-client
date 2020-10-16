import React from 'react'

const Definition = ({word, resetDefTerm}) => {

    return(
        <>
        {word !== "" ? 
            <div className="definition">
                <p>{word.word}</p>
                <p>{word.pinyin}</p>
                <p>{word.definition}</p>
                <button className="close-def" onClick={resetDefTerm}>X</button>
            </div> : null}
        </>
        
    )
}

export default Definition