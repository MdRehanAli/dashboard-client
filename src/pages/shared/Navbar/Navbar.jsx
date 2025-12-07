import React from 'react';
import icon from '../../../assets/notification.png'
import user from '../../../assets/user.png'

const Navbar = () => {
    return (
        <nav className="navbar justify-between bg-white">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                {/* Sidebar toggle icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <div className="px-4 flex justify-between items-center w-full">
                <div>
                    <h1 className='font-bold'>Good Afternoon Asif</h1>
                    <p>13 June, 2026</p>
                </div>

                <div className='flex items-center gap-4'>
                    <img className='pr-3 border-r-2 border-[#8C92AF] h-fit' src={icon} alt="" />
                    <div>
                        <p className='font-bold'>Asif Riaj</p>
                        <p>Hr</p>
                    </div>
                    <img src={user} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;