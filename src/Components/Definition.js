import React from 'react'
import {withRouter} from 'react-router-dom'

const Definition = ({word, resetDefTerm, dragStart, dragging, dragEnd, defDragStyles, history}) => {

    const listStyle = {
        position: 'fixed',
        top: '30%',
        right: '5%',
        height: '30vh',
        width: '40vw',
        'font-size': '24px',
    }

    return(
        <>
        {word !== "" ? 
            <div className="definition" 
                    style={history.location.pathname === "/book" ? defDragStyles : listStyle} 
                    onMouseDown={dragStart} 
                    onMouseMove={dragging} 
                    onMouseUp={dragEnd}>

                <h1>{word.word}</h1>
                <p>{word.pinyin}</p>
                <p>{word.definition}</p>
                <button className="close-def" onClick={resetDefTerm} src="../images/close.png">X</button>
            </div> : null}
        </>
        
    )
}

export default withRouter(Definition)


/* to do
1. add to state:
        diffX: 0
        diffY: 0
        dragging: false
        defDragStyles: {}
2. define dragStart
3. define dragging
4. define dragEnd
5. pass as props through CurrentBook
        this.dragStart,
        this.dragging,
        this.dragEnd,
        this.state.defDragStyles

*/


/* add conditional to sylte attribute that checks the path of history.path */