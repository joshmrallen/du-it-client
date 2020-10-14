import React from 'react'
import Word from '../Components/Word'

const WordList = ({words}) => {

    const list = () => {
        if(words){
            return words.map((word, index) => <Word key={index} word={word} />)
        } else {
            return "没词！快开一本书阅读一下!"
        }
    }

    return(
        <div className="list">
            <h1>Word List</h1>
            {list()}
        </div>
    )

}

export default WordList