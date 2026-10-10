
import { Link, useParams } from "react-router-dom"

function ProductDetails({ products }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  return (
    <div className="container my-5">
      {product ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="row g-0 align-items-center">

                {/* Product Image */}
                <div className="col-12 col-md-5 bg-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid w-100 p-4"
                    style={{
                      height: "320px",
                      objectFit: "contain"
                    }}
                  />
                </div>

                {/* Product Information */}
                <div className="col-12 col-md-7">
                  <div className="card-body p-4 p-lg-5">
                    <span className="badge bg-success mb-3">
                      Product Details
                    </span>

                    <h2 className="card-title fw-bold mb-3">
                      {product.name}
                    </h2>

                    <p className="text-secondary mb-4">
                      {product.description}
                    </p>

                    <div className="border rounded-3 p-3 mb-4 bg-light">
                      <small className="text-secondary d-block">
                        Price
                      </small>
                      <h3 className="text-success fw-bold mb-0">
                        ₹{Number(product.price).toFixed(2)}
                      </h3>
                    </div>

                    <Link
                      to="/products"
                      className="btn btn-success px-4"
                    >
                      <span aria-hidden="true">← </span>
                      Back to Products
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center p-4">
          <h4 className="alert-heading">Product Not Found</h4>
          <p className="mb-3">
            Sorry, we couldn't find a product with this ID.
          </p>
          <Link to="/products" className="btn btn-outline-success">
            Browse Products
          </Link>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
