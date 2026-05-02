import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const { product } = props;
    
    // Safety check - if product doesn't exist yet
    if (!product) {
        return (
            <div className='breadcrum'>
                HOME <img src={arrow_icon} alt="" /> SHOP
            </div>
        );
    }
    
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arrow" /> 
            SHOP <img src={arrow_icon} alt="arrow" /> 
            {product.category} <img src={arrow_icon} alt="arrow" /> 
            {product.name}
        </div>
    )
}

export default Breadcrums