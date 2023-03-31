import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import ProductDetails from './components/ProductDetails'

import { CheckSession } from './services/Auth'
import './styles/App.css'

function App() {
	const [user, setUser] = useState(null)

	const handleLogOut = () => {
		//Reset all auth related state and clear localStorage
		setUser(null)
		localStorage.clear()
	}

	const checkToken = async () => {
		const user = await CheckSession()
		setUser(user)
	}

	useEffect(() => {
		const token = localStorage.getItem('token')

		if (token) {
			checkToken()
		}
	}, [])

	return (
		<div className="App">
			<Nav user={user} handleLogOut={handleLogOut} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/signIn" element={<SignIn setUser={setUser} />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cart">Cart</Route>
				</Routes>
			</main>
		</div>
	)
}

export default App
