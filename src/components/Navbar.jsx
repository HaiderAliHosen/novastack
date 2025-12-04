import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => loc.pathname === path

  return (
    <header className="container nav" role="navigation">

      <Link to="/" className="brand" style={{ textDecoration: "none" }}>
        NovaStack<span style={{ color: '#0b74ff' }}>Tech</span>
      </Link>

      {/* Hamburger Icon */}
      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main Navigation">
        <Link className={`link ${isActive('/') ? 'active' : ''}`} to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link className={`link ${isActive('/about') ? 'active' : ''}`} to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link className={`link ${isActive('/contact') ? 'active' : ''}`} to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <a className="link btn secondary" href="/contact" onClick={() => setMenuOpen(false)}>
          Get Started
        </a>
      </nav>

    </header>
  )
}
