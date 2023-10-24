import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function Navbar() {

    const auth = useAuth()

    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }
    
    return (
        <div>
            {/* <div>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>           // Links & NavLink
            </div> */}                                              
            <div>
                <nav>
                    <ul>
                        <li><NavLink style={navLinkStyles} to='/'>Home</NavLink></li>
                        <li><NavLink style={navLinkStyles} to='about'>About</NavLink></li> 
                        <li><NavLink style={navLinkStyles} to='products'>Products</NavLink></li>
                        <li><NavLink style={navLinkStyles} to='profile'>Profile</NavLink></li>
                        {!auth.user && <li><NavLink style={navLinkStyles} to='login'>Login</NavLink></li>}
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar