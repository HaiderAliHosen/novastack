import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div>
      <h1>Contact Us</h1>
      <p className="small">Have a project in mind? Fill the form or use the contact links below.</p>

      <div style={{display:'flex',gap:20,flexWrap:'wrap',marginTop:12}}>
        <ContactForm />
        <aside style={{minWidth:220}}>
          <div className="card">
            <h4>Contact & Social</h4>
            <p className="small">Email: hello@novastack.tech</p>
            <p className="small">Phone: +880 1XX-XXXXXXX</p>
            <div className="contact-links" style={{ marginTop: 12 }}>
            <a className="link" href="mailto:hello@novastack.tech">Email us</a>
            <a className="link" href="tel:+8801XXXXXXXX">Call us</a>
            <a className="link" href="https://twitter.com">X</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
