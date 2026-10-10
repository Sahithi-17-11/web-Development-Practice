import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Product Store
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/create-product">
            Create Product
          </Link>

          <Link className="nav-link" to="/products">
            Products
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header