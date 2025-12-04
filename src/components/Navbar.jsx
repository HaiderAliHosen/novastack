import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation()

  const isActive = (path) => loc.pathname === path

  return (
    <header className="container nav" role="navigation">

      <Link to="/" className="brand" style={{ textDecoration: "none" }}>
        NovaStack<span style={{ color: '#0b74ff' }}>Tech</span>
      </Link>

      <nav className="nav-links" aria-label="Main Navigation">
        <Link 
          className={`link ${isActive('/') ? 'active' : ''}`} 
          to="/"
        >
          Home
        </Link>

        <Link 
          className={`link ${isActive('/about') ? 'active' : ''}`} 
          to="/about"
        >
          About
        </Link>

        <Link 
          className={`link ${isActive('/contact') ? 'active' : ''}`} 
          to="/contact"
        >
          Contact
        </Link>

        <a className="link btn secondary" href="/contact" style={{ marginLeft: 12 }}>
          Get Started
        </a>
      </nav>
    </header>
  )
}
