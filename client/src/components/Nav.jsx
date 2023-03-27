import { Link } from "react-router-dom"

const Nav = () => {

  return (
    // <header>
      <nav>
      <div className="logo">
        <img alt="logo" src="" />
      </div>
        <Link to="/about">About Us</Link>
        <Link to="/addSneaker">Add Listing</Link>
        <Link to="/sneakers">Kicks</Link>
        <Link to="/">Home</Link>
      </nav>
    // </header>
  )
}

export default Nav
