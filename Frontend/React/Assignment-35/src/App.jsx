import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./Home"
import CreateProduct from "./CreateProduct"
import Products from "./Products"
import ProductDetails from "./ProductDetails"
import ProductsData from "./ProductsData"
function App() {
  const [products, setProducts] = useState(ProductsData)
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "create-product",
        element: (
          <CreateProduct
          products={products}
          setProducts={setProducts}
          />
  )
      },
      {
        path: "products",
        element: <Products products = {products}/>
      },
      {
        path: "products/:id",
        element: <ProductDetails products = {products} />
      }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routerObj} />
    </div>
  )
}

export default App