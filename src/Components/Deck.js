import React from 'react'

const Deck = ({wordChooser}) => {
    return(
        <div className="deck" onClick={wordChooser}>
            <p id="character">Deck</p>
        </div>
    )
}

export default Deck