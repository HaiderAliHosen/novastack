import React, {useState} from 'react'

export default function ContactForm(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [errors,setErrors] = useState({})
  const [sent,setSent] = useState(false)

  function validate(){
    const e = {}
    if(!form.name.trim()) e.name = 'Name is required'
    if(!form.email.trim()) e.email = 'Email is required'
    else if(!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if(!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function onChange(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  function onSubmit(ev){
    ev.preventDefault()
    const v = validate()
    setErrors(v)
    if(Object.keys(v).length === 0){
      // fake submit: show success state
      setSent(true)
      // reset after small delay (optional)
      setForm({name:'',email:'',message:''})
    }
  }

  if(sent){
    return (
      <div className="card" role="status">
        <h3>Thanks — message sent!</h3>
        <p className="small">We’ll get back to you within 1–2 business days. (This is a fake success state for the assignment.)</p>
        <button className="btn" onClick={()=>setSent(false)}>Send another</button>
      </div>
    )
  }

  return (
    <form className="contact-form card" onSubmit={onSubmit} noValidate>
      <label>
        <div className="small">Name</div>
        <input className="input" name="name" value={form.name} onChange={onChange} />
        {errors.name && <div style={{color:'crimson'}}>{errors.name}</div>}
      </label>
      <label>
        <div className="small">Email</div>
        <input className="input" name="email" value={form.email} onChange={onChange} />
        {errors.email && <div style={{color:'crimson'}}>{errors.email}</div>}
      </label>
      <label>
        <div className="small">Message</div>
        <textarea name="message" value={form.message} onChange={onChange} />
        {errors.message && <div style={{color:'crimson'}}>{errors.message}</div>}
      </label>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button className="btn" type="submit">Send Message</button>
        <div className="small">Or email: hello@novastack.tech</div>
      </div>
    </form>
  )
}
