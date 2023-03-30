import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Nav = ({ user, handleLogOut }) => {


	let userOptions
	if (user) {
		userOptions = (
			<nav>
				<Link to="/cart"><ShoppingCartIcon /></Link>
				<Link to="/about">About Us</Link>
				<Link to="/products">Products</Link>
				<Link to="/">Home</Link>
				<Link onClick={handleLogOut} to="/">
					Sign Out
				</Link>
				<Link>Welcome {user.email}!</Link>
				<div className="logo">
					<img
						alt="logo"
						src="https://i.postimg.cc/SKTchvDq/LDA-Logo-Blue3.png"
					/>
				</div>
			</nav>
		)
	}

	const publicOptions = (
		<nav>
			<Link to="/cart"><ShoppingCartIcon /></Link>
      <Link to="/register"><PersonIcon/></Link>
      <Link><FavoriteBorderOutlinedIcon/></Link>
			<Link to="/about">About Us</Link>
			<Link to="/signIn">Sign In</Link>
			<Link to="/products">Products</Link>
			<Link to="/">Home</Link>
			<div className="logo">
				<img
					alt="logo"
					src="https://i.postimg.cc/SKTchvDq/LDA-Logo-Blue3.png"
				/>
			</div>
		</nav>
	)

	return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
