import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import '../App.css';
import cartton from '../assets/cartton.avif';

const Createjob = () => {
  const [selectedOption, setSelectedOption] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    data.skills = selectedOption.map(option => option.value); // Map the selected options to their values
    try {
      const response = await fetch("http://localhost:5000/post-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      if(result.acknowledged === true) {
        alert("Job posted successfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className=" min-h-screen flex items-center justify-center py-10">
      <div className="max-w-4xl w-full  rounded-lg shadow-lg p-6 lg:p-12">
        <img src={cartton} className="ml-auto mb-6 w-1/2" alt="Cartoon" />
        <h2 className="text-2xl font-semibold text-center">Post a Job</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:space-x-6">
          
          <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                placeholder="Web developer"
                {...register("jobTitle", { required: true })}
                className="create-job-input w-full"
              />
              {errors.jobTitle && <p className="text-red-500">Job title is required</p>}
            </div>
            <div className="w-full k font-bold ">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="ex: Microsoft"
                {...register("companyName", { required: true })}
                className="create-job-input w-full"
              />
              {errors.companyName && <p className="text-red-500">Company name is required</p>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minSalary", { required: true })}
                className="create-job-input w-full"
              />
              {errors.minSalary && <p className="text-red-500">Minimum salary is required</p>}
            </div>
            <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxSalary", { required: true })}
                className="create-job-input w-full"
              />
              {errors.maxSalary && <p className="text-red-500">Maximum salary is required</p>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType", { required: true })} className="create-job-input w-full">
                <option value="">Choose your salary type</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.salaryType && <p className="text-red-500">Salary type is required</p>}
            </div>
            <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                {...register("jobLocation", { required: true })}
                className="create-job-input w-full"
              />
              {errors.jobLocation && <p className="text-red-500">Job location is required</p>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                {...register("postingDate", { required: true })}
                className="create-job-input w-full"
              />
              {errors.postingDate && <p className="text-red-500">Job posting date is required</p>}
            </div>
            <div className="w-full   font-bold ">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel", { required: true })} className="create-job-input w-full">
                <option value="">Choose your experience level</option>
                <option value="No Experience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
              {errors.experienceLevel && <p className="text-red-500">Experience level is required</p>}
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreatableSelect 
              defaultValue={selectedOption}
              onChange={setSelectedOption} 
              options={options} 
              isMulti 
              className="create-job-input w-full" 
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="w-full   font-bold ">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url" 
                placeholder="Paste your company logo URL: https://example.com/logo.png"
                {...register("companyLogo")}
                className="create-job-input w-full"
              />
            </div>
            <div className="w-full  font-bold ">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input w-full">
                <option value="">Choose your employment type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          <div className="w-full   font-bold ">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea 
              className="create-job-input w-full h-32"
              rows={6}
              placeholder="Provide a detailed job description"
              {...register("description")}
            ></textarea>
          </div>

          <div className="w-full   font-bold ">  
            <label className="block mb-2 text-lg">Job Posted by</label>
            <input
              type="email"
              placeholder="your email address"
              {...register("postedBy")}
              className="create-job-input w-full"
            />
          </div>
         

          <input 
            type="submit" 
            className="block w-full mt-6 bg-blue-700 text-white font-semibold px-8 py-2 rounded-md cursor-pointer" 
            value="Post Job"
          />
        </form>
      </div>
    </div>
  

  );
}

export default Createjob;
