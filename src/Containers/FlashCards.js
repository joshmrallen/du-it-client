import React from 'react'
import Deck from '../Components/Deck'
import ActiveCard from '../Components/ActiveCard'

const FlashCards = ({cardFront, flashCardWord, flipToggle, wordChooser}) => {

    

    return(
        <div className="flashcards">
            <Deck wordChooser={wordChooser} />
            <ActiveCard 
                cardFront={cardFront} 
                flashCardWord={flashCardWord} 
                flipToggle={flipToggle} 
            />
        </div>
    )

}

export default FlashCards

/*
Create a new component called Card
1. gets an onClick that will "toggle" between 'front' and 'back'
2. if 'front', then the Card renders the character only
3. if 'back', then the Card renders the character, the pinyin, and the definition
*/