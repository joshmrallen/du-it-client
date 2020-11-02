import React from 'react'
import {withRouter} from 'react-router-dom'

const Definition = ({word, resetDefTerm, dragStart, dragging, dragEnd, defDragStyles, history, getVoice}) => {

    const listStyle = {
        position: 'fixed',
        top: '30%',
        right: '5%',
        height: '30vh',
        width: '40vw',
        fontSize: '24px',
    }

    const clickHandler = (event) => {
        if(event.target.className === "女声"){
            getVoice(word.id, 'female')
        } else if(event.target.className === "男声"){
            getVoice(word.id, 'male')
        }
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
                <p className="女声" onClick={clickHandler}>女</p>
                <p className="男声" onClick={clickHandler}>男</p>
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

/* buttons on definition card:
    1. Add two sound buttons with id male-voice and female-voice respectively
        * 1 for male, 1 for female
    2. Style them
            position: absolute 
            bottom: 2%
            right: 2% for male and right: 5% for female so the female button shows up on the left
*/