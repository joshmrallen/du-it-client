import React from 'react'

const Deck = ({wordChooser}) => {
    return(
        <div className="deck" onClick={wordChooser}>
            <p id="character">Click for new card</p>
        </div>
    )
}

export default Deck