import React from 'react';
import InputField from '../components/InputField';

const Location = ({ handleCategoryChange }) => {
    return (
        <>
        <div className='text-black'>
            <h4 className='text-lg font-medium mb-2'>Location</h4>
            <div className="flex flex-col gap-2">
                <label className='sidebar-label-container flex items-center gap-2'>
                    <input type="radio" name="location" value="all" onChange={handleCategoryChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField handleCategoryChange={handleCategoryChange} value="London" title="London" name="location" />
                <InputField handleCategoryChange={handleCategoryChange} value="Seattle" title="Seattle" name="location" />
                <InputField handleCategoryChange={handleCategoryChange} value="Madrid" title="Madrid" name="location" />
                <InputField handleCategoryChange={handleCategoryChange} value="Boston" title="Boston" name="location" />
                <InputField handleCategoryChange={handleCategoryChange} value="Brussels" title="Brussels" name="location" />
                <InputField handleCategoryChange={handleCategoryChange} value="Remote" title="Remote" name="location" />
            </div>
            </div>
        </>
    );
};

export default Location;
