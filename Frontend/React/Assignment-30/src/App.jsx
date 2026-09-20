import React from 'react'
import Products from './Products';
import './App.css';
function App() {

  const products = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack",
    brand: "Fjallraven",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    brand: "Mens Casual",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    brand: "Mens Clothing",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    brand: "Mens Clothing",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    brand: "John Hardy",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: 6,
    name: "Solid Gold Petite Micropave",
    brand: "Hafeez Center",
    price: 168,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  }
  ];
  return (
    <div className='app-container'>
      <h2>Products</h2>
      <div className="product-list">
      {
        products.map((p) => 
                <Products key={p.id} name={p.name} image={p.image} brand={p.brand} price={p.price}/>
        )
      }
      </div>
    </div>
  )
}

export default App