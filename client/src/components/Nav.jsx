import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Nav = ({ user, handleLogOut }) => {
	let userOptions
	if (user) {
		userOptions = (
			<nav>
				<div className="flex w-full flex-wrap items-center justify-between">
				<div className='"flex-start flex-wrap items-center justify-between px-6"'>
					<img
						className="mt-[0.5rem] ml-0 w-[25%]"
						alt="logo"
						src="https://i.postimg.cc/SKTchvDq/LDA-Logo-Blue3.png"
					/>
          <h3 className='pl-[35rem] pt-[2rem]'>Welcome {user.email}!</h3>
				</div>
				<div className=" "></div>
				<div className="flex-end basis-[100%] items-center lg:!flex lg:basis-auto">
          <Link onClick={handleLogOut} to="/">
            <ExitToAppOutlinedIcon />
          </Link>
					<Link to="/">
						<PersonIcon />
					</Link>
					<Link to="/cart">
						<ShoppingCartIcon />
					</Link>
					<Link>
						<FavoriteBorderOutlinedIcon />
					</Link>
					<Link to="/">Home</Link>
					<Link to="/products">Products</Link>
					<Link to="/about">About Us</Link>
				</div>
			</div>
			</nav>
		)
	}

	const publicOptions = (
		<nav>
			<div className="flex w-full flex-wrap items-center justify-between">
				<div className='"flex-start flex-wrap items-center justify-between px-6"'>
					<img
						className="mt-[0.5rem] ml-0 w-[25%]"
						alt="logo"
						src="https://i.postimg.cc/SKTchvDq/LDA-Logo-Blue3.png"
					/>
				</div>
				<div className=" "></div>
				<div className="flex-end basis-[100%] items-center lg:!flex lg:basis-auto">
					<Link to="/register">
						<PersonIcon />
					</Link>
					<Link to="/cart">
						<ShoppingCartIcon />
					</Link>
					<Link>
						<FavoriteBorderOutlinedIcon />
					</Link>
					<Link to="/">Home</Link>
					<Link to="/products">Products</Link>
					<Link to="/about">About Us</Link>
				</div>
			</div>
		</nav>
	)

	return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
