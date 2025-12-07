import React from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../../assets/upload.png'
import link from '../../assets/link.png'
import cross from '../../assets/delete.png'

const DragNDrop = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path.slice(2, file.path.length)}
        </li>
    ));

    return (
        <section >
            <div className="container border-2 border-dashed border-[#10B981] rounded-xl px-5">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />

                    <div className='py-5'>
                        <img className='mx-auto' src={upload} alt="" />
                        <p className='text-center'><span className='text-[#10B981]'>Upload</span> nominee profile image or drag and drop.</p>
                        <p className='text-center text-[#595F7A]'>Accepted File Type: jpg, png</p>
                    </div>
                </div>
            </div>
            <aside className='mt-6'>
                <ul className='text-[#595F7A] px-4 py-2 rounded-[48px] bg-[#fafafd] flex items-center gap-3 w-fit'>
                    {/* <span><img src={link} alt="" /></span> */}
                    {files}
                    {/* <span><img src={cross} alt="" /></span> */}
                </ul>
            </aside>
        </section>
    );
};

export default DragNDrop;