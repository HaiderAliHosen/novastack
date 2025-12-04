import React from 'react'
export default function Testimonials(){
  const data = [
    {name:'Sara Lee', text:'NovaStack delivered fast and exceeded expectations.'},
    {name:'Marco Ruiz', text:'Fantastic team and clear communication.'}
  ]
  return (
    <section aria-labelledby="testimonials" style={{marginTop:20}}>
      <h3 id="testimonials" className="section-title">Testimonials</h3>
      <div className="testimonials">
        {data.map((t,i)=>(
          <div className="testimonial card" key={i}>
            <p style={{marginTop:0}}>"{t.text}"</p>
            <div style={{fontWeight:600, marginTop:8}}>- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
