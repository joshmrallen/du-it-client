import React from 'react'

const ActiveCard = ({cardFront, flashCardWord, flipToggle}) => {

    return(
        <div className="card" onClick={flipToggle}>
            {cardFront ? 
                <>
                    {/* <h1>Front</h1> */}
                    <h1 id="character">{flashCardWord.word}</h1>
                    {/* <div>
                    </div>  */}
                </>
                : 
                <>
                    <h1>Back</h1>
                    <div className="back">
                        <h1>{flashCardWord.word}</h1>
                        <p>{flashCardWord.pinyin}</p>
                        <p>{flashCardWord.definition}</p>
                    </div>
                </>}
        </div>
    )
}

export default ActiveCard