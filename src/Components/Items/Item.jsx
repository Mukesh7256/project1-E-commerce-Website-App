import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={handleScrollToTop}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className='item-price'>
        <div className="item-price-new">
          Rs {props.new_price}
        </div>
        <div className="item-price-old">
          Rs {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item