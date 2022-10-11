import React from 'react';

const Footer = () => {
    return (
        <footer className=''>
            <div className=' bg-slate-900 text-white p-5 bottom-0 w-full text-xl text-center'>
                <h1 className='text-4xl'>Quiz World</h1>
               <ul className='flex justify-center  mt-5'>
                <li className='mr-2'>Privacy</li>
                <li>Term of policy</li>
               </ul>

            </div>
            <div className=' bg-slate-900 text-white  w-full text-xl text-center'>
            © 2022  All rights reserved.

            </div>
        </footer>
    );
};

export default Footer;