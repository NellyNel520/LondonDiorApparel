import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from './Store'

const Nav = ({ user, handleLogOut }) => {
  const { state } = useContext(Store);
  const { cart } = state;

  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <Link to="/cart">Cart
        {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
        </Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/">Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link>Welcome {user.email}!</Link>
        <div className='logo'>
         <img alt='logo' src="https://i.postimg.cc/SKTchvDq/LDA-Logo-Blue3.png" />
      </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About Us</Link>
      <Link to="/register">Register</Link>
      <Link to="/signIn">Sign In</Link>
      <Link to="/products">Products</Link>
      <Link to="/">Home</Link>
      <div className='logo'>
         <img alt='logo' src="https://i.postimg.cc/SKTchvDq/LDA-Logo-Blue3.png" />
      </div>
    </nav>
  )

  return (
    <header>
      {user ? userOptions : publicOptions}
      
    </header>
  )
}

export default Nav
