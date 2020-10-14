import React from 'react'
import Word from '../Components/Word'

const WordList = ({words}) => {

    const list = () => {
        if(words){
            return words.map(word => <Word props={word} />)
        } else {
            return "没词！快开一本书阅读一下!"
        }
    }

    return(
        <div className="list">
            {list()}
        </div>
    )

}

export default WordList