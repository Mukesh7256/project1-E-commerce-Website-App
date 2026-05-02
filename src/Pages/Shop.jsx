import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'
import './CSS/Shop.css' // Optional: for shop-specific styles

const Shop = () => {
  return (
    <main className='shop'>  {/* or <div> */}
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </main>
  )
}

export default Shop