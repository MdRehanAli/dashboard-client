import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../pages/shared/Sidebar/Sidebar';
import Navbar from '../pages/shared/Navbar/navbar';

const DashboardLayout = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <div className='flex'>
                <Sidebar></Sidebar>
                <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;