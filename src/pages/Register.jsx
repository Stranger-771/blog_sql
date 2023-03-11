import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='Auth'>
        <h1>Register</h1>
        <form >
            <input required type="text" placeholder="username"/>
            <input required type="email" placeholder="email"/>
            <input required type="password" placeholder="password"/>
            <button>Register</button>
            <p>this is an error!</p>
            <span>
                Already have an Account? <Link to="/Login">Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register