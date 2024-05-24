import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProductsInBucket from './Pages/ProductsInBucket.jsx'
import { BucketProvider } from './Contexts/BucketContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='bucket' element={<ProductsInBucket />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BucketProvider> 
    <RouterProvider router={router} />
    </BucketProvider>
  </React.StrictMode>,
)
