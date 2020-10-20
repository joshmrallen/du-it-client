import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = ({user}) => {



    return(
        <div>
            {user ? <> 
                <ul className="navbar">
                    <li><NavLink exact={true} to="/" className="navlink" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/list" className="navlink" activeClassName="active-link">My Word List</NavLink></li>
                    <li><NavLink to="/book" className="navlink" activeClassName="active-link">Current Book</NavLink></li>
                    <li><NavLink to="/flashcards" className="navlink" activeClassName="active-link">Flashcards</NavLink></li>
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