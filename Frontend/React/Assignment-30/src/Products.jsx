import React from 'react'
import './App.css'
function Products({image, name, brand, price}) {
  return (
    <div className='product-card'>
        <img src={image} alt={name} />
        <h3>Product name : {name}</h3>
        <p>Brand : {brand}</p>
        <p>Price : ₹{price}</p>
    </div>
  )
}

export default Products