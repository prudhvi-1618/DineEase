import React, { useState,useEffect } from 'react';
import {ToastContainer,toast} from 'react-toastify'
import api from "../api"
import Card from './Card';

const Category = () => {

  const [items,setItems] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);
  const [categories,setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(()=>{
    async function fetch(){
      toast.success("Fetching Data",{autoClose:1000});
      try{
        const res = await api.get("/menu");
        setItems(res.data.response);
        setFilteredItems(res.data.response);
        setCategories(res.data.categories); 
      }catch(e){
        toast.error("Found an error")
      }
          
    }
    fetch();
  },[])

  useEffect(()=>{
    const filterItems = selectedCategory? items.filter(item => item.category === selectedCategory): items; 
    setFilteredItems(filterItems);
  },[selectedCategory,items])

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
      <div className="category md:px-4 pl-2 my-2">
        <div className="categories-list flex gap-3">
            <div 
              className={`px-3 py-2 rounded-2xl text-xl border-2 cursor-pointer hover:bg-zinc-900 hover:text-zinc-100 ${selectedCategory===''?"bg-zinc-900 text-zinc-100 ":null}`}
              onClick={()=>setSelectedCategory('')}>
               All
            </div>
            {categories.map((category,index)=>(
              <div key={index} 
                className={`px-3 py-2 rounded-2xl text-xl border-2 cursor-pointer hover:bg-zinc-900 hover:text-zinc-100 ${selectedCategory===category?"bg-zinc-900 text-zinc-100 ":null}`}
                onClick={()=>setSelectedCategory(category)}>
                {category}
              </div>
            ))}
        </div>
        <div className="cards my-4 flex flex-wrap gap-4 md:mb-2 mb-[20vh]">
         {filteredItems.map((item,index)=>(
            <Card key={index} item={item} />
         ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Category