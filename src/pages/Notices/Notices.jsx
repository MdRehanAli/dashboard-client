import React, { use } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { LuSquarePen } from 'react-icons/lu';
import { TbDotsVertical } from 'react-icons/tb';



const Notices = ({ noticePromise }) => {
    const notices = use(noticePromise);

    console.log(notices)
    return (
        <div className="overflow-x-auto">
            <table className="table table-md">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Notice Type</th>
                        <th>Departments/Individual</th>
                        <th>Published On</th>
                        <th className='w-[20px]'>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        notices.map(notice => <tr key={notice._id} className='space-y-1'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>{notice.noticeTitle}</td>
                            <td>{notice.noticeType}</td>
                            <td>{notice.department}</td>
                            <td>{notice.publishedOn}</td>
                            <td className='bg-[#DAFAEF] rounded-xl text-center text-sm'>{notice.status}</td>
                            <td className='flex gap-4 items-center text-2xl'>
                                <IoEyeOutline />
                                <LuSquarePen />
                                <TbDotsVertical />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Notices;