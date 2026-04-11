import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter-section'>
      <div className='newsletter'>
          <h1>Get Exclusive Offers on Your Email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div className='newsletter-input-box'>
              <input type="email" placeholder='Your Email id' />
              <button>Subscribe</button>
          </div>
      </div>
    </section>
  )
}

export default Newsletter