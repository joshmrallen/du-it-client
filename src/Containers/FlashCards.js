import React from 'react'
import Card from '../Components/Card'

const FlashCards = ({cardSide, words, flipToggle}) => {

    const cards = () => {
        if(words){
            return words.map(word => <Card word={word} flipToggle={flipToggle} /> )
        } else {
            return "没词！快开一本书阅读一下!"
        }
    }

    const currentCard = () => {
        console.log(cardSide)
    }

    return(
        <div className="flashcards">
            {cards()}
            {currentCard()}
        </div>
    )

}

export default FlashCards