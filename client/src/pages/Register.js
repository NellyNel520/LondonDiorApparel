import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { Link } from 'react-router-dom'
const Register = () => {
	let navigate = useNavigate()
	const initialState = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	}
	const [formValues, setFormValues] = useState(initialState)

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await RegisterUser({
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
		})
		setFormValues(initialState)
		navigate('/signIn')
	}

	return (
		<div className="signin col">
			<div className="card-overlay centered">
				<form className="col" onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="name">Name</label>
						<input
							onChange={handleChange}
							name="name"
							type="text"
							placeholder="John Smith"
							value={formValues.name}
							required
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input
							onChange={handleChange}
							name="email"
							type="email"
							placeholder="example@example.com"
							value={formValues.email}
							required
						/>
					</div>

					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							onChange={handleChange}
							type="password"
							name="password"
							value={formValues.password}
							required
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							onChange={handleChange}
							type="password"
							name="confirmPassword"
							value={formValues.confirmPassword}
							required
						/>
					</div>
					<button
						disabled={
							!formValues.email ||
							(!formValues.password &&
								formValues.confirmPassword === formValues.password)
						}
            className='ml-3 rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
					>
						Sign Up
					</button>
				</form>
				<div className="mt-6">
					<h3>Already a User?</h3>
					<Link to="/signIn">
						<button className='ml-3 rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Sign In</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Register
