import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='Auth'>
        <h1>Login</h1>
        <form >
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
            <span>
                Don't you have an Account? <Link to="/Register">Register</Link>
            </span>
        </form>
    </div>
  )
}

export default login