import React from 'react'

const WordWithListener = ({word, listDefineHandler, appRemoveHandler}) => {

    const clickHandler = () => {
        console.log("Word has been clicked!")
        listDefineHandler(word)
    }//consider adding toggle for closing the definition modal

    const removeHandler = () => {
        console.log(word.word, ": removeHandler in WordWithListener")
        appRemoveHandler(word)
    }

    return(
        <>
            <div className="list-word" onClick={clickHandler}>
                <h1>{word.word}</h1>
                <button className="remove-word" onClick={removeHandler}>Remove from list</button>
            </div>
        </>
    )
}

export default WordWithListener

//note that this one doesn't get the pinyin because the user will be clicking on it to get it along with the definition