import React from 'react';
import { FaEnvelopeOpenText,FaRocket } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <>
            <h3 className='text-md font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText /> Email me for jobs
            </h3>
            <p className='text-primary/75 text-base mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci distinctio maiores hic voluptatum ea atque,
            </p>
            <div className='space-y-4'>
                <input
                    type='email'
                    name='email'
                    id='email1'
                    placeholder='name@email.com'
                    className='w-full block py-2 pl-3 border focus:outline-none'
                />
                <input
                    type='submit'
                    value={'Subscribe'}
                    className='w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'
                />
            </div>
        
            
            <h3 className=' mt-6 text-md font-bold mb-2 flex items-center gap-2'>
                <FaRocket/> Get noticed faster
            </h3>
            <p className='text-primary/75 text-base mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci distinctio maiores hic voluptatum ea atque,
            </p>
            <div className='space-y-4'>
                <input
                    type='email'
                    name='email'
                    id='email1'
                    placeholder='name@email.com'
                    className='w-full block py-2 pl-3 border focus:outline-none'
                />
                <input
                    type='submit'
                    value={'Upload your resume'}
                    className='w-full block py-2 pl-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'
                />
            </div>
           
        </>
    );
};

export default Newsletter;
