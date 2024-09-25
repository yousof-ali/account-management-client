import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import "./Sidebar.css"
import { FaUser } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import { GrDocumentUser } from "react-icons/gr";


const Sidebar = () => {
    const [active,setActive] = useState(1);
    const handleActive = (n) => {
        setActive(n);
    }
    console.log(active);
    return (
        <div className=' bg-gray-700 py-4 px-2  min-h-[100vh]'>
            <div className='pb-4'>
                <h1 className='text-xl text-white font-bold text-center'>Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='text-white text-xl font-semibold'>
                <li className='mt-3 hover:shadow '>
                   <Link onClick={() => handleActive(1)} className={`${active == 1&&"active"} rounded hover:bg-blue-600 `}><IoMdHome /> Home</Link>
                </li>
                <li className='mt-3 hover:shadow '>
                   <Link onClick={() => handleActive(2)} to={'/account'} className={`${active == 2&&"active"} rounded hover:bg-blue-600 `}><FaUser />
                   Account</Link>
                </li>
                <li className='mt-3 hover:shadow '>
                   <Link onClick={() => handleActive(3)} to={'/invoice'} className={`${active == 3&&"active"} rounded hover:bg-blue-600 `}><FaFileInvoice />
                   Invoice</Link>
                </li>
                <li className='mt-3 hover:shadow '>
                   <Link onClick={() => handleActive(4)} to={'/money'} className={`${active == 4&&"active"} rounded hover:bg-blue-600 `}><IoReceiptSharp />
                   Money Receipt</Link>
                </li>
                <li className='mt-3 hover:shadow '>
                   <Link onClick={() => handleActive(5)} to={'/info'} className={`${active == 5&&"active"} rounded hover:bg-blue-600 `}><GrDocumentUser />
                   Customer Info</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;