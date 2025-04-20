import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'

const BookingLayout = () => {
  return (
    <div>
        <Nav />
        <div className='flex flex-col-reverse md:flex-row'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default BookingLayout;