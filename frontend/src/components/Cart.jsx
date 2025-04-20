import React from 'react';
import {CART} from '../constants'
import OrderItem from './OrderItem';
import { Link } from 'react-router';

const Cart = () => {
  const items = localStorage.getItem(CART);
  const cart = items ? JSON.parse(items) : [];
  
  return (
    <div className='mx-3 md:mx-32 flex sm:flex-row flex-col gap-5'>
      <div className=" order-items  rounded-xl shadow-sm p-4">
        {cart.map((item,index)=>(
          <OrderItem key={index} item={item}/>
        ))}
      </div>
      <div className="place-order sm:w-[30vw] h-fit shadow-sm p-4 ">
        <div className="text-3xl border-b-1 py-2 mb-4">PRICE DETAILS</div>
        <div className="items text-xl px-3 pb-2 flex justify-between">
          <div>No. of Items</div>
          <div className="font-semibold">{cart.length} items</div>
        </div>
        <div className="price text-xl px-3 pb-2 flex justify-between">
          <div >Price</div>
            <div className="font-semibold">₹ {cart.reduce((a, item) => a + item.price, 0)}</div>
        </div>
        <div className="discount text-xl px-3 pb-2 flex justify-between">
          <div >Discount</div>
            <div className="font-semibold"> - ₹ 0</div>
        </div>
        <div className="total-cost text-3xl p-3 m-4 border-dashed  border-y-1 flex justify-between">
          <div >Total Amount</div>
            <div className="font-semibold">₹ {cart.reduce((a, item) => a + item.price, 0)}</div>
        </div>
       <div className="flex justify-end">
        <Link to="signup" className="place-order text-3xl p-3 bg-zinc-800 text-zinc-100 w-fit rounded-xl cursor-pointer">
            Order Now
          </Link>
       </div>
      </div>
      
    </div>
  )
}

export default Cart