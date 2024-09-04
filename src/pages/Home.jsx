import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner.jsx'
import Jobs from '../pages/Jobs';
import Sidebar from '../sidebar/Sidebar';
import InputField from '../components/InputField';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedSalaryRange, setSelectedSalaryRange] = useState('all');
    const [selectedExperience, setSelectedExperience] = useState('all');
    const [selectedDateFilter, setSelectedDateFilter] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedEmploymentType, setSelectedEmploymentType] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    useEffect(() => {
        setIsLoading(true);
        // Fetch jobs data
        fetch('http://localhost:5000/all-jobs')
            .then(response => response.json())
            .then(data => {
                setJobs(data);
                setFilteredJobs(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        filterJobs();
    }, [selectedExperience, selectedDateFilter, selectedLocation, selectedEmploymentType, query]);

    const filterJobs = () => {
        let filtered = jobs.slice();
        //experienece level filter

        if (selectedExperience !== 'all') {
            filtered = filtered.filter(job => job.experienceLevel && job.experienceLevel.toLowerCase() === selectedExperience.toLowerCase());
        }

        if (selectedDateFilter !== 'all') {
            const now = new Date();
            let compareDate;

            if (selectedDateFilter === 'last 24 hours') {
                compareDate = new Date(now - 24 * 60 * 60 * 1000);
            } else if (selectedDateFilter === 'last 7 days') {
                compareDate = new Date(now - 7 * 24 * 60 * 60 * 1000);
            } else if (selectedDateFilter === 'last month') {
                compareDate = new Date(now - 30 * 24 * 60 * 60 * 1000);
            }

            filtered = filtered.filter(job => job.postingDate && new Date(job.postingDate) >= compareDate);
        }
          ///location filter
        if (selectedLocation !== 'all') {
            filtered = filtered.filter(job => job.jobLocation && job.jobLocation.toLowerCase() === selectedLocation.toLowerCase());
        }
           //employment filter
        if (selectedEmploymentType !== 'all') {
            filtered = filtered.filter(job => job.employmentType && job.employmentType.toLowerCase() === selectedEmploymentType.toLowerCase());
        }
        //salary filter

    // Salary Range Filter
    if (selectedSalaryRange !== 'all') {
        const [minSalary, maxSalary] = selectedSalaryRange.split('-').map(Number);
        filtered = filtered.filter(job => {
            const jobSalary = parseInt(job.salary, 10);
            return jobSalary >= minSalary && jobSalary <= maxSalary;
        });
    }

        if (query.trim() !== '') {
            const searchTerm = query.toLowerCase();
            filtered = filtered.filter(job =>
                job.jobTitle && job.jobTitle.toLowerCase().includes(searchTerm)
            );
        }

        setFilteredJobs(filtered);
        setCurrentPage(1);
    };

    const handleCategoryChange = (event) => {
        const { name, value } = event.target;
    
        switch (name) {
            case 'experience':
                setSelectedExperience(value);
                break;
            case 'dateFilter':
                setSelectedDateFilter(value);
                break;
            case 'location':
                setSelectedLocation(value);
                break;
            case 'employmentType':
                setSelectedEmploymentType(value);
                break;
            case 'salaryRange': // Handle salary range filter
                setSelectedSalaryRange(value);
                break;
            default:
                break;
        }
    };
    

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
        const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
    };

    const { startIndex, endIndex } = calculatePageRange();
    const currentJobs = filteredJobs.slice(startIndex, endIndex);

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredJobs.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
        <div className='text-black'>
            <Banner query={query} handleInputChange={handleInputChange} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-24 '>
                {/* Sidebar */}
                <div className='col-span-1 md:col-span-1 bg-gray-100 rounded mr-2'>
                    <Sidebar handleCategoryChange={handleCategoryChange} />
                </div>
                {/* Jobs display */}
                <div className='col-span-1 md:col-span-2 bg-white p-4 rounded'>
                    {isLoading ? (
                        <p className='font-medium'>Loading...</p>
                    ) : (
                        <>
                            <div className='flex gap-4 mb-4 '>
                                {/* Additional filters can be added here if needed */}
                                <InputField handleCategoryChange={handleCategoryChange} value="Filter Value" title="Filter Title" name="filterName" />
                            </div>
                            {currentJobs.length > 0 ? (
                                <Jobs className="bg-gray-50" result={currentJobs} />
                            ) : (
                                <>
                                    <h3 className='text-lg font-bold mb-2'>No Jobs Found</h3>
                                    <p>No jobs match the selected criteria.</p>
                                </>
                            )}
                            <div className='flex justify-between mt-4'>
                                <button
                                    className='bg-gray-50 p-2 rounded'
                                    onClick={previousPage}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <span>Page {currentPage} of {Math.ceil(filteredJobs.length / itemsPerPage)}</span>
                                <button
                                    className='bg-gray-200 p-2 rounded'
                                    onClick={nextPage}
                                    disabled={currentPage === Math.ceil(filteredJobs.length / itemsPerPage)}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </div>
                {/* Right side section */}
                <div className='col-span-1 md:col-span-1 bg-gray-100 p-4 rounded'>
                   <Newsletter/>
                </div>
            </div>
            </div>
        </>
    );
};

export default Home;
