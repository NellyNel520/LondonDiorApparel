import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/">Cart</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Products</Link>
        <Link to="/">Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
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
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/gridy/app.svg"
            alt="welcome banner"
          />
        </div>
      </Link>
      
    </header>
  )
}

export default Nav
