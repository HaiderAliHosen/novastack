import React from 'react'
import { Link } from "react-router-dom"
export default function Hero({title, subtitle, cta}){
  return (
    <section className="header-hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-sub">{subtitle}</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link className="btn" to="/contact">{cta ?? 'Get Started'}</Link>
          <Link className="btn secondary" to="/about">Learn More</Link>
        </div>
      </div>
      <div style={{width:320}}>
        <div className="card">
          <h4 style={{margin:'0 0 8px'}}>Why NovaStack?</h4>
          <p className="small">We deliver modern cloud applications with clean code and fast delivery.</p>
        </div>
      </div>
    </section>
  )
}
