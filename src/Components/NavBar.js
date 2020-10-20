import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = ({user}) => {



    return(
        <div>
            {user ? <> 
                <ul className="navbar">
                    <li><NavLink to="/" className="navlink">Home</NavLink></li>
                    <li><NavLink to="/list" className="navlink">My Word List</NavLink></li>
                    <li><NavLink to="/book" className="navlink">Current Book</NavLink></li>
                    <li><NavLink to="/flashcards" className="navlink">Flashcards</NavLink></li>
                    <li><h1>hidden</h1></li>
                    <li><h1>hidden</h1></li>
                    <li><h1>hidden</h1></li>
                    <li><h2>Dú it 阅读</h2></li>
                </ul>
             </> : 
             <>
                <ul className="navbar">
                    <li><NavLink to="/" className="navlink">Login / Register</NavLink></li>
                </ul>
             </>
            }
        </div>
    )
}

export default NavBar