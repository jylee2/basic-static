import React from 'react'
import { Link } from 'react-router-dom'

import config from '../config'

const Nav = (props: {name: string, setName: (name: string) => void}) => {
  const { name, setName } = props

  const logout = async () => {
    try {
      const response = await fetch(config.apiUrl.logout, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
      })

      const content = await response.json()
      console.log('----------Logout content', content)
      setName('')
    } catch (error) {
      console.log('----------Logout fetch error', error)
      return null
    }
  }

  let menu

  if (!name) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="navbar-brand">Login</Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="navbar-brand">Register</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/logout" className="navbar-brand" onClick={logout}>Logout</Link>
        </li>
      </ul>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            {menu}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
