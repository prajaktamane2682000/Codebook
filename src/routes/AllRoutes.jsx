import React from 'react'
import {Routes, Route} from "react-router-dom"
// import { HomePage } from '../pages'
// import { ProductList } from '../pages/Products/ProductList'
// import { ProductDetail } from '../pages/ProductDetail'
// import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { CartPage } from '../pages/Cart/CartPage'
import {ProtectedRoutes} from './ProtectedRoutes'
import {OrderPage} from '../pages/Order/OrderPage'
import { DashboardPage } from '../pages/Dashboard/DashboardPage'
import { PageNotFound } from '../pages/PageNotFound'
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import("../pages").then(module => ({ default: module.HomePage })));
const ProductList = lazy(() => import("../pages/Products/ProductList").then(module => ({ default: module.ProductList })));
const ProductDetail = lazy(() => import("../pages/ProductDetail").then(module => ({ default: module.ProductDetail })));
const Login = lazy(() => import("../pages/Login").then(module => ({ default: module.Login })));

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div className=' text-5xl mb-16 mt-16 text-white '>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="products" element={<Suspense fallback={<div className=' text-5xl mb-16 mt-16 text-white '>Loading...</div>}><ProductList /></Suspense> } />
      <Route path="products/:id" element={<Suspense fallback={<div className=' text-5xl mb-16 mt-16 text-white '>Loading...</div>}><ProductDetail /></Suspense>} />
      <Route path="login" element={<Suspense fallback={<div className=' text-5xl mb-16 mt-16 text-white '>Loading...</div>}><Login /></Suspense>} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoutes>
            <CartPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/order-summary"
        element={
          <ProtectedRoutes>
            <OrderPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardPage />
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


