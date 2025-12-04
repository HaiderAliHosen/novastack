import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation()
  return (
    <header className="container nav" role="navigation">
      <div className="brand">NovaStack<span style={{color:'#0b74ff'}}>Tech</span></div>
      <nav className="nav-links" aria-label="Main Navigation">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
        <a className="link btn secondary" href="/contact" style={{marginLeft:12}}>Get Started</a>
      </nav>
    </header>
  )
}
