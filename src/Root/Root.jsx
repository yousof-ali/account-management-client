import React from 'react';
import Navbar from '../Component/Navbar';
import Dashboard from '../Component/Dashboard';
import Sidebar from '../Component/Sidebar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-3 '>
                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;