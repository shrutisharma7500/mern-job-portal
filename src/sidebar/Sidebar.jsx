import React from 'react';
import Location from './Location';
import Salary from './Salary';
import Jobpostingdata from './Jobpostingdata';
import Workexperience from './Workexperience';
import Employmenttype from './Employmenttype';

const Sidebar = ({ handleCategoryChange }) => {
    return (
        <>
            <Location handleCategoryChange={handleCategoryChange} />
            <Salary handleCategoryChange={handleCategoryChange} 
            />
            <Jobpostingdata handleCategoryChange={handleCategoryChange} />
            <Workexperience handleCategoryChange={handleCategoryChange} />
            <Employmenttype handleCategoryChange={handleCategoryChange} />
        </>
    );
};

export default Sidebar;
