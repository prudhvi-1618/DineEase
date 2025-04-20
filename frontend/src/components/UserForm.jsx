import React from 'react'
import api from "../api"
import { CART } from '../constants'
import { useNavigate } from 'react-router'
const UserForm = () => {
    
  const navigate = useNavigate();
  const Order = async (e)=>{
    e.preventDefault();
    const items = localStorage.getItem(CART);
    const cart = items ? JSON.parse(items) : [];
    const phone_number = e.target.phone.value;
    const res = await api.post("/order",{
        customer_name:e.target.username.value,
        phone_number:e.target.phone.value,
        cart:cart
    });
    localStorage.clear();
    navigate(`/user/${phone_number}`);
  }
  return (
    <div className='flex-1  m-2 flex justify-center'>
        <div className='mt-8 md:m-8 w-[90vw] md:w-[50vw] flex flex-col gap-5'>
            <h1 className='text-4xl font-medium'>Fill your Details</h1>
            <div>
              <form onSubmit={Order} className='text-[1.1rem] text-zinc-600 font-medium flex flex-col gap-2'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="username" className=' m-1' >User name</label>
                    <input type="text" name="username" id="username" className='px-2 py-2 border-2 border-zinc-200 rounded-[5px]' />
                </div>
                <div className='w-full flex flex-col ' >
                  <label htmlFor="phone" className=' m-1' >Phone number</label>
                  <div className='flex gap-2'>
                    <div className='px-3 py-2 border-2 border-zinc-200 rounded-[5px] basis-20' >+91</div>
                    <input type="tel" name="phone" id="phone" 
                      pattern="[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{4}" 
                      className='w-full p-2 border-2 border-zinc-200 rounded-[5px]' />
                  </div>
                </div>
                  
                <button type="submit"
                  
                  className='mb-[30vw] sm:my-3 text-2xltext-zinc-600 hover:bg-zinc-800 hover:text-[#fff] hover:font-normal hover:border-zinc-700 font-medium px-3 py-2.5 border-2 border-zinc-500 rounded-2xl w-fit cursor-pointer'>
                  Sign up
                </button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default UserForm