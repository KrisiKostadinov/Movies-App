import React from 'react';

const Register = () => {
  return (
    <div className='forms-container'>
      <h1>Register</h1>
      <form>
        <label>Email
          <input type="text" name="email" placeholder='Enter your email address...' />
        </label>
        <label>Password
          <input type="password" name="password" placeholder='Enter your password...' />
        </label>
        <label>Confirm Password
          <input type="password" name="confirmPassword" placeholder='Confirm your password...' />
        </label>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register;