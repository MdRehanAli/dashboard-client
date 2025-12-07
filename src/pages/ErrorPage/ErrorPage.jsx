import React from 'react';
import error from '../../assets/Error.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 p-20 bg-white rounded-4xl mt-8'>
            <img className='mx-auto' src={error} alt="" />
            <div className='flex justify-center'>
                <Link to='/' className='btn bg-secondary font-bold text-white'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;