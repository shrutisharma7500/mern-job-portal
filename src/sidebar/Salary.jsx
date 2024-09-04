import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';

const Salary = ({ setFilteredJobs, jobs }) => {
    const [salaryType, setSalaryType] = useState('');
    const [salaryRange, setSalaryRange] = useState('');

    useEffect(() => {
        // Debugging console logs
        console.log("setFilteredJobs:", typeof setFilteredJobs); // Check type of setFilteredJobs
        console.log("jobs:", Array.isArray(jobs) ? jobs.length : jobs); // Check if jobs is an array and its length

        if (!setFilteredJobs || !Array.isArray(jobs)) {
            console.error('setFilteredJobs is not a function or jobs is not an array');
            return;
        }

        let filteredJobs = [...jobs];

        if (salaryType && salaryRange) {
            const [minStr, maxStr] = salaryRange.split('-');
            const min = parseInt(minStr);
            const max = parseInt(maxStr);

            filteredJobs = filteredJobs.filter((job) => {
                // Assume job.salaryType and job.salary are available in job data
                if (job.salaryType.toLowerCase() !== salaryType.toLowerCase()) {
                    return false;
                }

                const jobSalary = parseInt(job.salary);
                return jobSalary >= min && jobSalary <= max;
            });
        }

        setFilteredJobs(filteredJobs);
    }, [salaryType, salaryRange, jobs, setFilteredJobs]);

    const handleSalaryTypeChange = (type) => {
        setSalaryType(type);
        setSalaryRange(''); // Clear salary range when changing salary type
    };

    const handleSalaryRangeChange = (selectedRange) => {
        setSalaryRange(selectedRange);
    };

    return (
        <>
            <div className="salary-type-container">
                <div
                    className={`salary-type ${salaryType === 'yearly' ? 'active' : ''}`}
                    onClick={() => handleSalaryTypeChange('yearly')}
                >
                    Yearly
                </div>
                <div
                    className={`salary-type ${salaryType === 'monthly' ? 'active' : ''}`}
                    onClick={() => handleSalaryTypeChange('monthly')}
                >
                    Monthly
                </div>
                <div
                    className={`salary-type ${salaryType === 'hourly' ? 'active' : ''}`}
                    onClick={() => handleSalaryTypeChange('hourly')}
                >
                    Hourly
                </div>
            </div>

            {salaryType === 'yearly' && (
                <div className="salary-range-container flex flex-col">
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="0-30000" title="< $30,000" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="30000-50000" title="$30,000 - $50,000" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="50000-80000" title="$50,000 - $80,000" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="80000-100000" title="$80,000 - $100,000" />
                </div>
            )}

            {salaryType === 'monthly' && (
                <div className="salary-range-container flex flex-col">
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="0-2500" title="< $2,500" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="2500-4167" title="$2,500 - $4,167" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="4167-6667" title="$4,167 - $6,667" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="6667-8333" title="$6,667 - $8,333" />
                </div>
            )}

            {salaryType === 'hourly' && (
                <div className="salary-range-container flex flex-col">
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="0-10" title="< $10" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="10-16" title="$10 - $16" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="16-27" title="$16 - $27" />
                    <InputField handleCategoryChange={handleSalaryRangeChange} value="27-33" title="$27 - $33" />
                </div>
            )}
        </>
    );
};

export default Salary;
