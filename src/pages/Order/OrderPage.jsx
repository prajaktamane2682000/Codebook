
import React from 'react'
import{ OrderSuccess} from '../Order/OrderSuccess'
import {OrderFail} from '../Order/OrderFail'
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

export const OrderPage = () => {

    const {state}= useLocation();
    useTitle("OrderPage")


  return (
    <div>
        { state.status ? <OrderSuccess/> : <OrderFail/>}
    </div>
  )
}
