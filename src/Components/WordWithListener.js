import React from 'react'

const WordWithListener = ({word, listDefineHandler}) => {

    const clickHandler = () => {
        console.log("Word has been clicked!")
        listDefineHandler(word)
    }

    return(
        <div className="list-word" onClick={clickHandler}>
            <p>{word.word}</p>
        </div>
    )
}

export default WordWithListener

//note that this one doesn't get the pinyin because the user will be clicking on it to get it along with the definition