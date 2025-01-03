import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Home/Homepage.jsx'
import CategoryPage from './Components/Pages/CategoryPage.jsx'
import ProductDetails from './Components/Product-Details/ProductDetails.jsx'
import CartProvider from './Components/ContextAPI/CartProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/headphones',
        element: <CategoryPage></CategoryPage>
      },
      {
        path: '/speakers',
        element: <CategoryPage></CategoryPage>
      },
      {
        path: '/earphones',
        element: <CategoryPage></CategoryPage>
      },
      {
        path: '/:slug',
        loader: async () => {
          const response = await fetch('/products.json')
          if (!response.ok) throw new Error('Failed to fetch products')
          return response.json()
        },
        element: <ProductDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
