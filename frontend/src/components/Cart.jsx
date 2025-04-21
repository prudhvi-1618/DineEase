import React, { useEffect, useState } from 'react';
import {CART} from '../constants'
import OrderItem from './OrderItem';
import { Link } from 'react-router';

const Cart = () => {
  
  const [myCart,setMyCart] = useState([]);

  function deleteCartItem(itemId){
      const updatedCart = myCart.filter(item => item.item_id !== itemId);
      setMyCart(updatedCart);
      localStorage.setItem(CART,JSON.stringify(updatedCart));
  }

  function incrementQuantity(itemId){
    const updatedCartQuantity = myCart.map(item =>(
      (item.item_id === itemId)?{...item,quantity:item.quantity+1}:item
    ));
    setMyCart(updatedCartQuantity);
    localStorage.setItem(CART,JSON.stringify(updatedCartQuantity));
  }

  function decrementQuantity(itemId){
    const updatedCartQuantity = myCart.map(item =>{
      if(item.quantity<=1) return item;
      return (item.item_id === itemId)?{...item,quantity:item.quantity-1}:item;
  });
    setMyCart(updatedCartQuantity);
    localStorage.setItem(CART,JSON.stringify(updatedCartQuantity));
  }

  useEffect(()=>{
    function fetch(){
      const items = localStorage.getItem(CART);
      const cart = items ? JSON.parse(items) : [];
      setMyCart(cart);
    }
    fetch()
  },[])
  
  return (
    <div className='mx-3 md:mx-32 flex sm:flex-row flex-col gap-5'>
      <div className=" order-items  rounded-xl shadow-sm p-4">
        {myCart.map((item,index)=>(
          <OrderItem key={index} item={item} 
          deleteItem={deleteCartItem} 
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}/>
        ))}
      </div>
      <div className="place-order sm:w-[30vw] md:mb-2 mb-[20vh] h-fit shadow-sm p-4 ">
        <div className="text-3xl border-b-1 py-2 mb-4">PRICE DETAILS</div>
        <div className="items text-xl px-3 pb-2 flex justify-between">
          <div>No. of Items</div>
          <div className="font-semibold">{myCart.length} items</div>
        </div>
        <div className="price text-xl px-3 pb-2 flex justify-between">
          <div >Price</div>
            <div className="font-semibold">₹ {myCart.reduce((a, item) => a + (item.price)*(item.quantity), 0)}</div>
        </div>
        <div className="discount text-xl px-3 pb-2 flex justify-between">
          <div >Discount</div>
            <div className="font-semibold"> - ₹ 0</div>
        </div>
        <div className="total-cost text-3xl p-3 m-4 border-dashed  border-y-1 flex justify-between">
          <div >Total Amount</div>
            <div className="font-semibold">₹ {myCart.reduce((a, item) => a + (item.price)*(item.quantity), 0)}</div>
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