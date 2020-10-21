import React from 'react'
import { withRouter } from 'react-router-dom'

const NoWords = ({history}) => {

    const clickHandler = () => {
        history.push("/")
    }

    return(
        <div className="list-word-home" onClick={clickHandler}>
            <p>No Words in your list yet! Open a book and start reading to add!</p>
        </div>
    )
}

export default withRouter(NoWords)



//className={history.location.pathname === "/" ? "list-word-home" : "list-word"}