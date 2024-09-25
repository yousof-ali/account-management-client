import React from 'react';
import Navbar from '../Component/Navbar';
import Dashboard from '../Component/Dashboard';
import Sidebar from '../Component/Sidebar';

const Root = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Root;