import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { BASE_URL } from '../global'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'
import { sizeWidth } from '@mui/system'

const Products = () => {
	const [products, setProducts] = useState([])
	// const [sort, setSort] = useState([])
  let size = []
  let sort = []

	useEffect(() => {
		const getAllProducts = async () => {
			const response = await axios.get(`${BASE_URL}product/products`)
			setProducts(response.data.products)
			// console.log(response.data)
		}
		getAllProducts()
	}, [])

  

	const sortProducts = (event) => {
		const sort = event.target.value
		console.log(event.target.value)
		products
			.slice()
			.sort((a, b) =>
				sort === 'lowest'
					? a.price > b.price
						? 1
						: -1
					: sort === 'highest'
					? a.price < b.price
						? 1
						: -1
					: a._id < b._id
					? 1
					: -1
			)
	}

  const filterProducts = (event) =>{
    console.log(event.target.value)
    if (event.target.value === ""){
      setProducts({size: event.target.value, products: products})
    } else {
      setProducts({
        size: event.target.value,
        products: products.filter(
          (product) => product.sizes.indexOf(event.target.value) >= 0
        )
        
      })
    }
  }


	return (
		<div>
			<h3>Products</h3>
			{/* <h1>Current Listings</h1> */}
			<div>
				<Filter
					{...products}
					count={products.length}
					size={size}
					sort={sort}
					filterProducts={filterProducts}
					sortProducts={sortProducts}
				/>
			</div>
			<section className="container-grid">
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
