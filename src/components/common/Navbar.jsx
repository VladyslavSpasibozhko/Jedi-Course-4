import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {
    to:'/people',
    title:'People'
  },
  {
    to:'/planets',
    title:'Planets'
  },
  {
    to:'/starships',
    title:'Starship'
  }
]

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {
            links.map(({ title, to }) => (
              <NavLink
                activeClassName='active'
                className='nav-item nav-link text-white'
                to={to}
                key={title}
              >
                {title}
              </NavLink>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
