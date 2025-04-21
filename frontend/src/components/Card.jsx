import React from 'react'
import {CART} from '../constants'

const Card = ({item}) => {
    const AddCart = ()=>{
        const prev_cart = JSON.parse(localStorage.getItem('CART'))||[];
        const cart = [...prev_cart,{
            "item_id": item._id, 
            "name":item.name,
            "imageUrl":item.imageUrl,
            "quantity": 1,
            "price": item.price

        }];
        
        localStorage.setItem(CART,JSON.stringify(cart));
    }
  return (
    <div className="card w-[240px] bg-[#FDAA5D] rounded-2xl flex flex-col justify-center items-center gap-1">
        <div className="image w-[240px] h-[240px] flex justify-center items-center overflow-hidden ">
        <img src={item.imageUrl} alt="" srcset="" className='rounded-t-2xl w-full h-full object-cover'/>
        </div>
        <div className="item-name text-2xl font-medium ">{item.name}</div>
        <div className="order-details flex gap-16 justify-between border-t-1 pt-2 text-xl">
        <div className="price font-extrabold ">₹{item.price}</div>
        <div className="rating text-amber-800">4.5⭐</div>
        </div>
        <div className="btn border-1 mb-2 px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#4AB7B6] hover:text-zinc-50 hover:border-0"
            onClick={AddCart}
        >Add to Cart</div>
    </div>
  )
}

export default Card