import React, { use } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Notices from '../Notices/Notices';

const noticePromise = fetch('./notices.js').then(res => res.json());

const NoticeManageMent = () => {
    const notices = use(noticePromise);

    return (
        <div className='m-6'>
            <div className='flex flex-col md:flex-row justify-between gap-5 items-center mb-10'>
                <div>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='px-3 py-3 border border-[#9096b1] text-primary rounded-lg'>
                            <FaAngleLeft />
                        </div>
                        <h1 className='text-xl'>Notice Management</h1>

                    </div>
                    <p><span className='text-[#00A46E]'>Active Notices: {notices.length}</span> | <span className='text-[#F59E0B]'>Draft Notice: 04</span></p>
                </div>
                <div>

                    <div>
                        <button className='btn bg-[#F95524] text-white rounded-lg'>Create Notice</button>
                        <button className='btn text-[#F59E0B] rounded-lg'>Create Notice</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-end items-center gap-4 mb-10'>
                <p>Filter by:</p>
                <select defaultValue="Departments or individuals" className="select">
                    <option disabled={true}>Departments or individuals</option>
                    <option value="Department">Department</option>
                    <option value="Individual">Individual</option>
                </select>
                <input type="text" className="input" placeholder="Employee Id or Name" />
                <select defaultValue="Status" className="select" placeholder="Status">
                    <option disabled={true}>Status</option>
                    <option value="Department">Department</option>
                    <option value="Individual">Individual</option>
                </select>
                <input type="date" className="input" placeholder="Published on" />
                <button className='btn border border-[#3B82F6] text-[#3B82F6]'>Reset Filters</button>
            </div>

            {/* Main Section  */}
            <div className="border border-[#9096b1] rounded-xl bg-white ">
                <p className='px-4 py-6 bg-[#fafafd] rounded-xl'>Please fill in the details below</p>
                <div className='p-6 pb-10'>
                    <Notices noticePromise={noticePromise}></Notices>
                </div>

            </div>
        </div >
    );
};

export default NoticeManageMent;