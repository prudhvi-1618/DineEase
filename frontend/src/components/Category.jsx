import React, { useState,useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import api from "../api"
import Card from './Card';

const Category = () => {

  const [items,setItems] = useState([]);
  useEffect(()=>{
    async function fetch(){
      const res = await api.get("/menu");
      // setItems(res.data.response);
      setItems(res.data.response);
    }
    fetch();
  },[])

  return (
    <div className='flex-1 md:mx-32 '>
      <div className='bg-[#2A4BA0] md:bg-[#ffff] w-full px-6 pt-6 py-4 rounded-b-4xl'>
        <div className="start flex flex-col justify-center gap-0 w-full">
          <div className="text-6xl md:text-7xl py-3 text-[#7D8FAB]">
            <div className='font-light py-2'>Shop</div>
            <div>By Category</div>
          </div>
        </div>
      </div>
      <div className="category px-4 ">
        <div className="cards my-4 flex flex-wrap gap-4">
         {items.map((item,index)=>(
            <Card key={index} item={item} />
         ))}
        </div>
      </div>
    </div>
  )
}

export default Category