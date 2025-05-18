import React from 'react'
import userProfile from '../assets/user_profile.png'

const Nav = () => {
  return (
    <div className='flex justify-center px-3 py-4 '>
        <div className="container max-w-[1400px] flex justify-between gap-5">
          <div className="logo text-4xl flex justify-center items-center">
            <div className='text-[#FDAA5D]'>Dine</div>
            <div className='text-[#4AB7B6]'>Ease</div>
          </div>
          <div className="profile">
            <img src={userProfile} alt="" width="41px" />
          </div>
        </div>
      </div>
  )
}

export default Nav