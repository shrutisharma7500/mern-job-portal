// Workexperience.jsx

import React from 'react';
import InputField from '../components/InputField';

const Workexperience = ({ handleCategoryChange }) => {
    return (
        <>
        <div className='text-black'>
            <h4 className='text-lg font-medium mb-2'>Work experience</h4>
            <div className="flex flex-col gap-2">
                <label className='sidebar-label-container'>
                    <input type="radio" name="experience" value="all" onChange={handleCategoryChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField handleCategoryChange={handleCategoryChange} value="Any experience" title="Any experience" name="experience" />
                <InputField handleCategoryChange={handleCategoryChange} value="Work remotely" title="Work remotely" name="experience" />
                <InputField handleCategoryChange={handleCategoryChange} value="Internship" title="Internship" name="experience" />
                <InputField handleCategoryChange={handleCategoryChange} value="Mid-Level" title="Mid-Level" name="experience" />
                <InputField handleCategoryChange={handleCategoryChange} value="Senior" title="Senior" name="experience" />
            </div>
            </div>
        </>
    );
};

export default Workexperience;
