// Jobpostingdata.jsx

import React from 'react';
import InputField from '../components/InputField';

const Jobpostingdata = ({ handleCategoryChange }) => {
    return (
        <>
        <div className='text-black'>
            <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
            <div className="flex flex-col gap-2">
                <label className='sidebar-label-container'>
                    <input type="radio" name="dateFilter" value="all" onChange={handleCategoryChange} />
                    <span className='checkmark'></span>All time
                </label>
                <InputField handleCategoryChange={handleCategoryChange} value="last 24 hours" title="Last 24 Hours" name="dateFilter" />
                <InputField handleCategoryChange={handleCategoryChange} value="last 7 days" title="Last 7 days" name="dateFilter" />
                <InputField handleCategoryChange={handleCategoryChange} value="last month" title="Last Month" name="dateFilter" />
            </div>
            </div>
        </>
    );
};

export default Jobpostingdata;
