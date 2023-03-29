import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <Link to="/">Cart</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Products</Link>
        <Link to="/">Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link>Welcome {user.email}!</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Cart</Link>
      <Link to="/">About Us</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/">Products</Link>
      <Link to="/">Home</Link>
    </nav>
  )

  return (
    <header>
      {user ? userOptions : publicOptions}
      
    </header>
  )
}

export default Nav
