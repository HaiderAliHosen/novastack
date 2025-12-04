import React from 'react'
import Team from '../components/Team'

export default function About(){
  return (
    <div>
      <h1>About NovaStack Technologies</h1>
      <p className="small">We are a product-focused team building modern web applications and APIs.</p>

      <section style={{marginTop:16}}>
        <div className="card">
          <h3 className="section-title">Our Story</h3>
          <p className="small">Founded by engineers, NovaStack was created to solve delivery problems that many startups face — messy codebases, slow releases, and unstable infrastructure. We help teams ship reliable products faster.</p>
        </div>
      </section>

      <Team />

      <section style={{marginTop:20}}>
        <div className="card">
          <h3>Mission & Vision</h3>
          <p className="small"><strong>Mission:</strong> Empower teams to build delightful user experiences with reliable engineering. <br/>
            <strong>Vision:</strong> To be the go-to partner for early-stage companies building mission-critical web products.</p>
          <div style={{marginTop:12}}>
            <a className="btn" href="/contact">Contact Us</a>
            <a className="link" href="/" style={{marginLeft:12}}>View Services</a>
          </div>
        </div>
      </section>
    </div>
  )
}
