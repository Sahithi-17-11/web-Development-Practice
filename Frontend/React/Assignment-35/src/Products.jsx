
import { Link } from "react-router-dom"

function Products({ products }) {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Our Products</h2>
          <p className="text-secondary mb-0">
            Explore our collection of products
          </p>
        </div>

        <span className="badge bg-success fs-6">
          {products.length} Products
        </span>
      </div>

      {products.length === 0 ? (
        <div className="alert alert-info text-center py-4">
          No products available. Create your first product!
        </div>
      ) : (
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img-top p-3"
                  style={{
                    height: "220px",
                    objectFit: "contain"
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    {p.name}
                  </h5>

                  <p className="card-text text-secondary">
                    {p.description}
                  </p>

                  <h5 className="text-success fw-bold mb-3">
                    ₹{Number(p.price).toFixed(2)}
                  </h5>

                  <Link
                    to={`/products/${p.id}`}
                    className="btn btn-outline-success mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
