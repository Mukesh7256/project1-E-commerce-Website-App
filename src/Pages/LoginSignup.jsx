import React, { useState } from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false); // false = Sign Up, true = Login
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', formData.email, formData.password);
      // Add login logic here
    } else {
      console.log('Sign Up:', formData);
      // Add signup logic here
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {!isLogin && (
              <input 
                type="text" 
                name="name"
                placeholder='Your Name' 
                value={formData.name}
                onChange={handleChange}
                required
              />
            )}
            <input 
              type="email" 
              name="email"
              placeholder='Email Address' 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder='Password' 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Continue'}</button>
        </form>
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Sign Up' : ' Login here'}
          </span>
        </p>
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginSignup