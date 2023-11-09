import React from 'react'

export const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span>Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login.</p>
      </div>
    </div>
  )
}
