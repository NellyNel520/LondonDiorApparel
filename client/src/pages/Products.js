import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../global'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(`${BASE_URL}product/products`)
      setProducts(response.data.products)
      // console.log(response.data)
    }
    getAllProducts()
  }, [])

  return (
    <div>
    <h3>Products</h3>
    {/* <h1>Current Listings</h1> */}
    <section className='container-grid'>
        {products.map((product) => (
          <Link to={`/products/${product._id}`}>
            <ProductCard
              key={product.id}
              {...product}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </section>

    
    </div>
  )
}

export default Products