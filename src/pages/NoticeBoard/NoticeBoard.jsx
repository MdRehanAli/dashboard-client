import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleLeft } from 'react-icons/fa';
import DragNDrop from '../../components/DragNDrop/DragNDrop';

const NoticeBoard = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        <div className='m-6'>
            <div className='flex items-center gap-4 mb-6'>
                <div className='px-3 py-3 border border-[#9096b1] text-primary rounded-lg'>
                    <FaAngleLeft />
                </div>
                <h1 className='text-xl'>Create a Notice</h1>
            </div>

            {/* Main Section  */}
            <div >

                <form>
                    <div className="border border-[#9096b1] rounded-xl bg-white ">
                        <p className='px-4 py-6 bg-[#fafafd] rounded-xl'>Please fill in the details below</p>
                        <fieldset className='p-6 pb-10'>
                            {/* Departments */}
                            <fieldset className="fieldset bg-[#fafafd] p-6 rounded-lg">
                                <label className="label text-[14px] text-black"><span className="text-red-600">*</span> Target Department(s) or Individual</label>
                                <select {...register('department', { required: true })} defaultValue="Pick a Department" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    <option value="">Department</option>
                                    <option value="">Individual</option>
                                </select>
                            </fieldset>

                            {/* Notice Title Name  */}
                            <label className="label text-[14px] text-black mt-6 mb-2"><span className="text-red-600">*</span> Notice Title</label>
                            <input type="text" {...register('noticeTitle', { required: true })} className="input w-full" placeholder="Write the Title of Notice" />

                            {/* Employee Info  */}
                            <div className='flex flex-col md:flex-row gap-4'>
                                <div className='w-full'>
                                    {/* Employee ID  */}
                                    <label className="label text-[14px] text-black mt-6 mb-2"><span className="text-red-600">*</span> Employee ID</label>
                                    <input type="text" {...register('employeeId', { required: true })} className="input w-full" placeholder="Select employee designation" />
                                </div>
                                <div className='w-full'>
                                    {/* Employee Name  */}
                                    <label className="label text-[14px] text-black mt-6 mb-2"><span className="text-red-600">*</span> Employee Name</label>
                                    <input type="text" {...register('employeeName', { required: true })} className="input w-full" placeholder="Enter employee full name" />
                                </div>
                                <div className='w-full'>
                                    {/* Employee Name  */}
                                    <label className="label text-[14px] text-black mt-6 mb-2"><span className="text-red-600">*</span> Position</label>
                                    <input type="text" {...register('employeeName', { required: true })} className="input w-full" placeholder="Select employee department" />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-5 mt-6'>
                                <div className='w-full'>
                                    {/* * Notice Type */}
                                    <fieldset className="">
                                        <label className="label text-[14px] text-black mb-2"><span className="text-red-600">*</span> Notice Type</label>
                                        <select {...register('noticeType', { required: true })} defaultValue="Pick a Department" className="select w-full">
                                            <option disabled={true}>Select Notice Type</option>
                                            <option value="">Department</option>
                                            <option value="">Individual</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <div className='w-full'>
                                    {/* Employee Name  */}
                                    <label className="label text-[14px] text-black mb-2"><span className="text-red-600">*</span> Publish Date</label>
                                    <input type="date" {...register('publishDate', { required: true })} className="input w-full" placeholder="Select Publishing Date " />
                                </div>
                            </div>

                            {/* Notice Body  */}
                            <label className="label text-[14px] text-black mt-6 mb-2">Notice Body</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm px-3 pt-2 text-[14px]' name="" {...register('noticeBody')} id="" placeholder='Write the details about notice'></textarea>

                            {/* Notice Body  */}
                            <label className="label text-[14px] text-black mt-6 mb-2">Upload Attachments (optional)</label>
                            {/* <input type="file" {...register('attachments')} className="file-input" placeholder="Your Photo" /> */}
                            <DragNDrop></DragNDrop>
                        </fieldset>
                    </div>
                    <div className='flex justify-center md:justify-end gap-4 mt-8 flex-wrap'>
                        <input type="submit" className='btn rounded-[56px] border border-[#595F7A] px-8' value="Cancel" />
                        <input type="submit" className='btn rounded-[56px] text-[#3B82F6] border border-[#3B82F6] px-8' value="Save as Draft" />
                        <input type="submit" className='btn rounded-[56px] text-[#F95524] border border-[#F95524] px-8' value="Publish Notice" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default NoticeBoard;