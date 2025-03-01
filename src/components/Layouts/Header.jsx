import React, { useEffect, useState } from 'react'
import Logo from "../../assets/logo (2).png";
import {Link} from 'react-router-dom'
import { Search } from '../Elements/Search'
import { DropdownLoggedIn } from '../Elements/DropdownLoggedIn'
import { DropdownLoggedOut } from '../Elements/DropdownLoggedOut'
import { useCart } from '../../context/CartContext'

export const Header = () => {

  const [darkMode, setDarkMode] =useState(JSON.parse(localStorage.getItem('darkMode')) || false)

  const[showSearchBar, setShowSearchBar] = useState(false);

  const [dropdown , setDropDown] =useState(false)

  const token = JSON.parse(sessionStorage.getItem("token"))

  const {cartList} =useCart();

  
  useEffect(()=>{
    
  localStorage.setItem('darkMode', JSON.stringify(darkMode));

  if(!darkMode){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')

  }
  }, [darkMode])
  
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-8" alt="codebook Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
          </Link>

          <div className="flex items-center space-x-10 rtl:space-x-reverse ">
                  
                  <span className='bi bi-gear-wide-connected dark:text-white text-2xl cursor-pointer' onClick={()=> setDarkMode(!darkMode)}></span>
                  <span className='bi bi-search dark:text-white text-2xl cursor-pointer' onClick={()=> setShowSearchBar(!showSearchBar)}></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span onClick={()=>setDropDown(!dropdown)} className='bi bi-person-circle dark:text-white text-2xl cursor-pointer'></span>
                  { dropdown &&(token?<DropdownLoggedIn setDropDown={setDropDown}/> : <DropdownLoggedOut setDropDown={setDropDown} /> )}

          </div>
        </div> 
      </nav>
      <section>
       {showSearchBar && <Search setShowSearchBar={setShowSearchBar} />}
      
      </section>
    </div>
  )
}


