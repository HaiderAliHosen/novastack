import React from 'react'
export default function Services(){
  const items = [
    {title:'Cloud Architecture', desc:'Scalable backends and microservices.'},
    {title:'Product Design', desc:'User-first UX & UI design.'},
    {title:'AI Integration', desc:'Smart automation using modern ML APIs.'},
  ]
  return (
    <section aria-labelledby="services" style={{marginTop:12}}>
      <h3 id="services" className="section-title">Our Services</h3>
      <div className="services">
        {items.map((s,i)=>(
          <div key={i} className="card">
            <h4 style={{margin:'0 0 6px'}}>{s.title}</h4>
            <p className="small">{s.desc}</p>
            <div style={{marginTop:12}}>
              <a className="link" href="/contact">Contact Us →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
