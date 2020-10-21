import React from 'react'
import RemoveSVG from './RemoveSVG'

const WordWithListener = ({word, listDefineHandler, appRemoveHandler}) => {

    const clickHandler = (event) => {
        const svg = document.querySelector('svg')
        if(event.target === svg){
            console.log("Is this an svg? ", (event.target === svg))
            appRemoveHandler(word)
        } else {
            console.log("Word has been clicked!")
            listDefineHandler(word)
        }
    }//consider adding toggle for closing the definition modal

    // const removeHandler = (event) => {
    //     console.log(word.word, ": removeHandler in WordWithListener")
    //     appRemoveHandler(word)
    // }

    return(
        <>
            <div className="list-word" onClick={clickHandler}>
                <h1>{word.word}</h1>
                {/* <button className="remove-word" onClick={removeHandler}>Remove from list</button> */}
                <RemoveSVG clickHandler={clickHandler} />
            </div>
        </>
    )
}

export default WordWithListener

//note that this one doesn't get the pinyin because the user will be clicking on it to get it along with the definition