import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../global'

const ProductDetails = () => {
  const [product, setProduct] = useState('')

	let { id } = useParams()
	let navigate = useNavigate()
	console.log(id)

	useEffect(() => {
		const getProductById = async () => {
			const response = await axios.get(`${BASE_URL}product/products/${id}`)
			console.log(response.data.product)
			setProduct(response.data.product)
		}
		getProductById()
	}, [id])
	console.log(product)


  return product ? (
    <div>
      <h2>{product.name}</h2>
    </div>
  ) : null
}

export default ProductDetails