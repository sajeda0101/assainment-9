import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='ml-60'>
            <XMarkIcon className='w-32 border border-2 border-orange-900  rounded-full mt-12 ml-20 md:mt-52 md:ml-96 '/>
            <p className='text-3xl mt-12 md:text-center mr-48'>Ops!Page not found</p>
            <p></p>
        </div>
    );
};

export default ErrorPage;