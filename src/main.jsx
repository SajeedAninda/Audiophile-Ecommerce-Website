import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Home/Homepage.jsx'
import CategoryPage from './Components/Pages/CategoryPage.jsx'
import ProductDetails from './Components/Product-Details/ProductDetails.jsx'

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
        path: '/product',
        element: <ProductDetails></ProductDetails>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
