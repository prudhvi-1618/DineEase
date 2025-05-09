import React from 'react'
import { RxCross1 } from "react-icons/rx";

const OrderItem = ({item,deleteItem,incrementQuantity,decrementQuantity}) => {
  return (
    <div className="order-item relative p-2 flex sm:flex-row flex-col justify-between gap-13 border-b-1">
              <div className='flex gap-7'>
                <div className="food-item-img sm:w-[180px] ">
                  <img src={item.imageUrl} alt="" srcset="" className='rounded-sm' />
                </div>
                <div className="details sm:py-0 py-5">
                  <div className="name text-4xl">{item.name}</div>
                  <div className="price text-xl font-bold">₹{item.price*item.quantity}</div>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className="item-count flex gap-5 justify-center items-center cursor-pointer">
                  <div 
                  onClick={(e)=>decrementQuantity(item.item_id)}
                  className="dec w-10 h-10 text-[25px] rounded-2xl bg-zinc-300 flex justify-center items-center"
                  >-</div>
                  <div className="count text-2xl ">{item.quantity}</div>
                  <div 
                  onClick={(e)=>incrementQuantity(item.item_id)}
                  className="inc w-10 h-10 text-[25px] rounded-2xl bg-zinc-300 flex justify-center items-center cursor-pointer">
                    +</div>
                </div>
              </div>
              <div 
              onClick={(e)=>deleteItem(item.item_id)}
              className="delete absolute top-0 right-0 my-3 flex justify-center cursor-pointer">
              <RxCross1 />
              </div>
        </div>
  )
}

export default OrderItem