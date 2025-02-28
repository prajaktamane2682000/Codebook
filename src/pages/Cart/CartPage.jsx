import React from 'react'
import {EmptyCart} from '../Cart/components/EmptyCart'
import {CartList} from '../Cart/components/CartList'
import { useCart } from '../../context/CartContext'
import { useTitle } from '../../hooks/useTitle'


export const CartPage = () => {

    const {cartList} =useCart()
    useTitle("Cart")

  return (
    <main>
      {cartList.length ? <CartList/> : <EmptyCart/> }
    </main>
  )
}
