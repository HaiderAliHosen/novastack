import React from 'react'
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="small">© {new Date().getFullYear()} NovaStack Technologies — Built with React</div>
      </div>
    </footer>
  )
}
