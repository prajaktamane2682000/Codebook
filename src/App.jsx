import React from 'react'
import {AllRoutes} from './routes/AllRoutes'
import { Header } from './components/Layouts/Header'
import { Footer } from './components/Layouts/Footer'

import 'bootstrap-icons/font/bootstrap-icons.css';

export const App = () => {
  return (
    <div className='dark:bg-slate-800'>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}


