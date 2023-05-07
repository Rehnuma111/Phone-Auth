import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='container'>
      <Link to="/login">
      <button >Login with Mobile</button>
      </Link>
        
    </div>
  )
}

export default Button