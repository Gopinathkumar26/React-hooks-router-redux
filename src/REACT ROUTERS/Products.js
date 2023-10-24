import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {

    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

  return (
    <div>
        <div>
            <input type='text' placeholder='Search Products'/>
        </div>
        <nav>
            <ul>
                <li><NavLink style={navLinkStyles} to='featuredproducts'>FeaturedProducts</NavLink></li>
                <li><NavLink style={navLinkStyles} to='newproducts'>NewProducts</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products