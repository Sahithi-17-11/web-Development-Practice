import { useForm } from "react-hook-form"

function CreateProduct({ products, setProducts }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function AddProduct(data) {
    const newProduct = {
      id: Date.now(),
      name: data.productName,
      price: Number(data.productPrice),
      image: "https://placehold.co/300x200?text=Product",
      description: `Manufactured on ${data.dateOfManufacture}`
    }

    setProducts([...products, newProduct])
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <div className="card shadow border-0">
            <div className="card-header bg-success text-white text-center py-3">
              <h3 className="mb-0">Create New Product</h3>
              <small>Enter the product details below</small>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit(AddProduct)}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.productName ? "is-invalid" : ""}`}
                    placeholder="Enter product name"
                    {...register("productName", {
                      required: "Product name is required"
                    })}
                  />
                  {errors.productName && (
                    <div className="invalid-feedback">
                      {errors.productName.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    className={`form-control ${errors.productPrice ? "is-invalid" : ""}`}
                    placeholder="Enter product price"
                    min="0"
                    step="0.01"
                    {...register("productPrice", {
                      required: "Product price is required",
                      min: {
                        value: 0.01,
                        message: "Price must be greater than zero"
                      },
                      valueAsNumber: true
                    })}
                  />
                  {errors.productPrice && (
                    <div className="invalid-feedback">
                      {errors.productPrice.message}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Date of Manufacture
                  </label>
                  <input
                    type="date"
                    className={`form-control ${errors.dateOfManufacture ? "is-invalid" : ""}`}
                    {...register("dateOfManufacture", {
                      required: "Manufacture date is required"
                    })}
                  />
                  {errors.dateOfManufacture && (
                    <div className="invalid-feedback">
                      {errors.dateOfManufacture.message}
                    </div>
                  )}
                </div>

                <button
                  className="btn btn-success w-100 py-2 fw-semibold"
                  type="submit"
                >
                  Create Product
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateProduct
