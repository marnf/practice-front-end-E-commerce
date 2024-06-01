import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Banner from './components/Banner/Banner.jsx';
import Products from './components/Products/Products.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader:()=> fetch('https://fakestoreapi.com/products')
      },
      {
        path:'/productDetails/:productId',
        element:<ProductDetails></ProductDetails>,
         loader:({params})=> fetch(`https://fakestoreapi.com/products/${params.productId}`)
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
