import React from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import  {FilterProvider}  from './context/FilterContext'
import { CartProvider } from './context/CartContext'
import { StrictMode } from 'react'
import { ScrollToTop } from './components/Other/ScrollToTop'
import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactTostify.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    
    <ToastContainer closeButton={close} autoClose={3000} position='top-right' />
    <ScrollToTop/>
   <CartProvider>
      <FilterProvider>
      
        <App />
      </FilterProvider>

    </CartProvider>
    
    </StrictMode>
  </BrowserRouter>  
)
