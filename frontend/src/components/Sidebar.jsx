import React from 'react'
import { FiHome, FiShoppingCart,FiGrid, FiUser } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const menuItem = [
    {
        icon: <FiHome />,
        name: "Home",
        url:""
    },
    {
        icon: <FiGrid />,
        name: "Category",
        url:"category"
    },
    {
        icon: <FiShoppingCart />,
        name: "Cart",
        url:"cart"
    },
    {
        icon: <FiUser />,
        name: "User",
        url:`user/signin`
    },
]
const Sidebar = () => {
    return (
        <div className='absolute bottom-0 md:relative md:top-0 md:left-0 '>
            <div className='fixed bottom-0 z-10 md:sticky md:top-5 bg-[#fff] flex flex-row md:flex-col w-[100vw]  md:w-fit p-3 md:my-7 justify-between md:justify-baseline md:items-center gap-5 '>
                {menuItem.map((item, index) => (
                    <NavLink to={item.url} key={index} 
                    end={item.url === ""} 
                    className={({isActive})=>`w-28 py-2 md:px-7 text-zinc-700 rounded-2xl flex flex-col justify-center items-center ${isActive?"bg-zinc-100":null} hover:bg-zinc-200 cursor-pointer`} >
                        <div style={{strokeWidth: 1 }} >{React.cloneElement(item.icon, { size: "30", style: { ...{ strokeWidth: 1 } } })}</div>
                        <div>{item.name}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;