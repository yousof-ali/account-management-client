import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='w-64 bg-gray-800 fixed h-full'>
            <div>
                <h1 className='text-2xl text-white font-bold text-center'>Admin Dashboard</h1>
            </div>
            <hr />
            <ul>
                <li>
                   <NavLink><IoMdHome /> Home</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;