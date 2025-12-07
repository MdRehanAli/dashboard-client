import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';

const NoticeManageMent = () => {
    return (
        <div className='m-6'>
            <div className='flex items-center gap-4 mb-6'>
                <div className='px-3 py-3 border border-[#9096b1] text-primary rounded-lg'>
                    <FaAngleLeft />
                </div>
                <h1 className='text-xl'>Notice Management</h1>
            </div>

            {/* Main Section  */}
            <div className="border border-[#9096b1] rounded-xl bg-white ">
                <p className='px-4 py-6 bg-[#fafafd] rounded-xl'>Please fill in the details below</p>
                <div className='p-6 pb-10'>

                </div>

            </div>
        </div >
    );
};

export default NoticeManageMent;