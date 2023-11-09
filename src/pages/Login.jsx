import React from 'react'

export const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span>Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>Do you have an account? Register.</p>
      </div>
    </div>
  )
}
