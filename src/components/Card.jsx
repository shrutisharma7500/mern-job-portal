import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi';

const Card = ({ data }) => {
    console.log('Received data:', data);  // Log the received data

    if (!data) {
        return <div>Error: No data provided</div>;
    }

    const {
        companyName,
        jobTitle,
        companyLogo,
        jobLocation,
        description,
        employmentType,
        minPrice,
        maxPrice,
        postingDate
    } = data;

    return (
        <section className='card p-4 border rounded-lg shadow-md mb-4'>
            <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
                <img src={companyLogo} alt={companyName} className="w-16 h-16 object-contain" />
                <div>
                    <h1 className='text-black mb-1'>{companyName}</h1>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                    <div className='text-black text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin />{jobLocation}</span>
                        <span className='flex items-center gap-2'><FiClock />{employmentType}</span>
                        <span className='flex items-center gap-2'><FiDollarSign />{minPrice}-{maxPrice}</span>
                        <span className='flex items-center gap-2'><FiCalendar />{postingDate}</span>
                    </div>
                    <p className='text-base text-primary/70 mt-2'>{description}</p>
                </div>
            </Link>
        </section>
    );
}

export default Card;
