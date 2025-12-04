import React from 'react'
import { Link } from "react-router-dom"
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <div>
      <Hero
        title="Build faster. Ship smarter."
        subtitle="NovaStack Technologies helps startups and teams build resilient web apps using modern tools and proven processes."
        cta="Contact Us"
      />
      <Services />
      <Testimonials />
      <section style={{marginTop:24}}>
        <div className="card">
          <h3 className="section-title">Ready to start?</h3>
          <p className="small">Talk to our team and get a free consultation.</p>
          <Link className="btn" to="/contact">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
