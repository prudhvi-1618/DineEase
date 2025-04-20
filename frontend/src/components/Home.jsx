import React from 'react'
import { CiSearch } from "react-icons/ci";
import Frame1 from '../assets/Frame1.png';
import Card from "../components/Card"

const Home = () => {
  return (
    <div className='flex-1 md:mx-32 '>
      <div className='bg-[#2A4BA0] md:bg-[#ffff] w-full px-6 pt-6 pb-16 md:py-4 rounded-b-4xl'>
        <div className="start flex md:flex-row flex-col justify-between w-full">
          <div className="greet text-6xl font-medium md:text-4xl py-6 md:py-4 text-[#7D8FAB]">Hi, Halal</div>
          <div className="search bg-[#EFF1F3] rounded-2xl flex p-3 text-[#7D8FAB]">
            <div className="search-icon  "><CiSearch size="36" /></div>
            <input type="text" className='px-4 text-2xl focus:outline-0' placeholder='search Anything..' />
          </div>
        </div>
      </div>


      <div className="banner flex justify-center items-center mx-2 my-6 w-full md:w-[700px]">
        <img src={Frame1} alt="" srcset="" width="800px" height="400px" className='w-full' />
      </div>


      <div className="popular-deals px-2 ">
        <h3 className='text-4xl font-medium'>Popular Deals</h3>
        <div className="cards my-4">
         {/* <Card/> */}
        </div>
      </div>
      <div className="space h-[15vh]"></div>
    </div>

  )
}

export default Home