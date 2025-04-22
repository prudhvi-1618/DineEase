import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import {CART} from '../constants'

const Card = ({item}) => {
    const AddCart = ()=>{
        const prev_cart = JSON.parse(localStorage.getItem('CART'))||[];
        const itemExists = prev_cart.some(cartItem => cartItem.item_id === item._id);
        if(itemExists){
            toast.warn( `${item.name} exists in cart.`,{autoClose:1000})
        }else{
            const cart = [...prev_cart,{
                "item_id": item._id, 
                "name":item.name,
                "imageUrl":item.imageUrl,
                "quantity": 1,
                "price": item.price
    
            }];
            localStorage.setItem(CART,JSON.stringify(cart));
            toast.success(`${item.name} is added to cart`,{autoClose:1000});
        }
        
    }
  return (
    <div className="card md:w-[240px] w-[180px] bg-[#FDAA5D] rounded-2xl flex flex-col justify-center items-center gap-1">
        <div className="image md:w-[240px] w-[180px] md:h-[240px] h-[180px] flex justify-center items-center overflow-hidden ">
        <img src={item.imageUrl} alt="" srcset="" className='rounded-t-2xl w-full h-full object-cover'/>
        </div>
        <div className="item-name text-2xl font-medium ">{item.name}</div>
        <div className="order-details flex md:gap-16 gap-4 justify-between border-t-1 pt-2 text-xl">
        <div className="price font-extrabold ">₹{item.price}</div>
        <div className="rating text-amber-800">4.5⭐</div>
        </div>
        <div className="btn border-1 mb-2 px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#977556] hover:text-zinc-50 hover:border-0"
            onClick={AddCart}
        >Add to Cart</div>
        <ToastContainer />
    </div>
  )
}

export default Card