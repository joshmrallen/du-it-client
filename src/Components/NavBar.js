import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = ({user}) => {



    return(
        <div className="navbar">
            {user ? <> 
                <NavLink to="/">Home</NavLink>
                <NavLink to="/list">My Word List</NavLink>
                <NavLink to="/book">Current Book</NavLink>
             </> : 
             <>
                {/* <NavLink>Login / Register</NavLink> */}
             </>
            }
        </div>
    )
}

export default NavBar