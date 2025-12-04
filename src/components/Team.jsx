import React from 'react'
export default function Team(){
  const people = [
    {name:'Aisha Khan', role:'CEO'},
    {name:'Rahim Ahmed', role:'CTO'},
    {name:'Nadia Chowdhury', role:'Product Lead'},
  ]
  return (
    <section aria-labelledby="team" style={{marginTop:20}}>
      <h3 id="team" className="section-title">Meet the Team</h3>
      <div className="team-grid">
        {people.map((p,i)=>(
          <div className="card" key={i}>
            <div style={{height:120,background:'#eef2ff',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10}}>
              <div style={{fontSize:28,color:'#0b74ff'}}>{p.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
            </div>
            <h4 style={{margin:'0 0 6px'}}>{p.name}</h4>
            <div className="small">{p.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
