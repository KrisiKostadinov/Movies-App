import React from 'react'

const Login = () => {
  return (
    <div className='forms-container'>
      <h1>Login</h1>
      <form>
        <label>Email
          <input type="text" name="email" placeholder='Enter your email address...' />
        </label>
        <label>Password
          <input type="password" name="password" placeholder='Enter your password...' />
        </label>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Login;