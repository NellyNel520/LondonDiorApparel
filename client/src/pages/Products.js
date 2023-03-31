import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'

const Products = ({ getAllProducts, products, setProducts }) => {
	// const [sort, setSort] = useState([])
	let size = ''
	let sort = ''

	useEffect(() => {
		getAllProducts()
	}, [])

	const sortProducts = (event) => {
		const sort = event.target.value
		console.log(products)
		products
			.sort((a, b) =>
				sort === 'lowest'
        (a.price - b.price
					// ? a.price > b.price
					// 	? 1
					// 	: -1
					// : sort === 'highest'
					// ? a.price < b.price
					// 	? 1
					// 	: -1
					// : a._id < b._id
					// ? 1
					// : -1
			))
	}

	const filterProducts = (event) => {
		console.log(event.target.value)
		if (event.target.value === '') {
			setProducts({ size: event.target.value, products: products })
		} else {
			setProducts({
				size: event.target.value,
				products: products.filter(
					(product) => product.sizes.indexOf(event.target.value) >= 0
				),
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
						<div key={product._id}>
							<ProductCard
								{...product}
								image={product.image}
								name={product.name}
								price={product.price}
							/>
						</div>
					</Link>
				))}
			</section>
		</div>
	)
}

export default Products
