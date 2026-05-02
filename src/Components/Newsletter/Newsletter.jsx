import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      console.log('Subscribed with:', email)
      setSubscribed(true)
      setEmail('')
      // Add your API call here
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className='newsletter-section'>
      <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form className='newsletter-input-box' onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder='Your Email id' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {subscribed && (
          <p className="success-message">Thank you for subscribing! 🎉</p>
        )}
      </div>
    </section>
  )
}

export default Newsletter