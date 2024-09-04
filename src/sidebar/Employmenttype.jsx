import React from 'react';
import InputField from '../components/InputField';

const Employmenttype = ({ handleCategoryChange }) => {
    return (
        <>
        <div className='text-black'>
            <h4 className='text-lg font-medium mb-2'>Employment type</h4>
            <div className="flex flex-col gap-2">
                <label className='sidebar-label-container'>
                    <input type="radio" name="employmentType" value="all" onChange={handleCategoryChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField handleCategoryChange={handleCategoryChange} value="Any" title="Any" name="employmentType" />
                <InputField handleCategoryChange={handleCategoryChange} value="Part-time" title="Part-time" name="employmentType" />
                <InputField handleCategoryChange={handleCategoryChange} value="Full-time" title="Full-time" name="employmentType" />
                <InputField handleCategoryChange={handleCategoryChange} value="Temporary" title="Temporary" name="employmentType" />
            </div>
            </div>
        </>
    );
};

export default Employmenttype;
