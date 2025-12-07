import React from 'react';
import Dashboard from '../pages/shared/Dashboard/Dashboard';

const dashboardPromise = fetch('/dashboard.js').then(res => res.json());

const DashboardLayout = () => {
    return (
        <div className='mx-auto w-11/12 md:w-full'>
            <div className='flex'>
                <Dashboard dashboardPromise={dashboardPromise}></Dashboard>
            </div>
        </div>
    );
};

export default DashboardLayout;