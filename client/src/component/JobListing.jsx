import React, { useState } from 'react'
import "../assets/css/JobListing.css";
import { IoLocationSharp } from "react-icons/io5";

const JobListing = () => {
        // Job Type
    const jobTypes = ['Full Time', 'Part Time', 'Remote', 'Freelancer'];

        // Job Experience 
    const experienceRanges = ['1-2 year', '2-3 year', '3-6 year', '6 more year'];

         // Posted Within 
    const postedwithin = ['Any', 'Today', 'Last 2 days','Last 3 days', 'Last 5 dyas', 'Last 10 days']

        // Filter Jobs
    const [price, setPrice] = useState(500);
            //onChange
    const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  //JobCard
const jobs = [
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
    title: 'Design & creative',
    company: 'Creative Agency',
    location: 'Delhi',
    salary: '$3500 - $4000',
    experienceRange: '1-2 year',
    timePosted: '5 hours ago',
    jobType: 'Part Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list2.png',
    title: 'Information technology',
    company: 'Creative Agency',
    location: 'Noida',
    salary: '$7500 - $8000',
    experienceRange: '3-6 year',
    timePosted: '4 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
    title: 'Design & Development',
    company: 'Creative Agency',
    location: 'karnataka',
    salary: '$3500 - $4000',
    experienceRange: '2-3 year',
    timePosted: '8 hours ago',
    jobType: 'Remote',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list3.png',
    title: 'Content Writer',
    company: 'Creative Agency',
    location: 'Greater Noida',
    salary: '$9500 - $10000',
    experienceRange: '1-2 year',
    timePosted: '10 hours ago',
    jobType: 'Freelancer',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list4.png',
    title: 'Sales & Marketing',
    company: 'Gaziabad',
    location: 'Athens, Greece',
    salary: '$5500 - $6000',
    experienceRange: '6 more year',
    timePosted: '9 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list3.png',
    title: 'Mobile Application',
    company: 'Creative Agency',
    location: 'Banglore',
    salary: '$8500 - $9000',
    experienceRange: '1-2 year',
    timePosted: '7 hours ago',
    jobType: 'Part Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list4.png',
    title: 'Design & Development',
    company: 'Creative Agency',
    location: 'gurugaon',
    salary: '$3500 - $4000',
    experienceRange: '1-2 year',
    timePosted: '8 hours ago',
    jobType: 'Freelancer',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list4.png',
    title: 'Construction',
    company: 'Creative Agency',
    location: 'gujarat',
    salary: '$4500 - $5000',
    experienceRange: '2-3 year',
    timePosted: '9 hours ago',
    jobType: 'Full Time',
  },
];

//Job category
const [selectedCategory, setSelectedCategory] = useState('All Categories');
//onChange
const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

//Job Type
const [selectedJobTypes, setSelectedJobTypes] = useState(new Set());
//onChange(Handle Job Type Change)
const handleJobTypeChange = (event) => {
    const jobType = event.target.name;
    setSelectedJobTypes((prev) => {
      const newSelectedJobTypes = new Set(prev);
      if (newSelectedJobTypes.has(jobType)) {
        newSelectedJobTypes.delete(jobType);
      } else {
        newSelectedJobTypes.add(jobType);
      }
      return newSelectedJobTypes;
    });
  };

  //Job Experience
const [selectedExperienceRanges, setSelectedExperienceRanges] = useState(new Set());
//onchange(Handle Experience Range Change)
const handleExperienceChange = (event) => {
    const experienceRange = event.target.name;
    setSelectedExperienceRanges((prev) => {
      const newSelectedExperienceRanges = new Set(prev);
      if (newSelectedExperienceRanges.has(experienceRange)) {
        newSelectedExperienceRanges.delete(experienceRange);
      } else {
        newSelectedExperienceRanges.add(experienceRange);
      }
      return newSelectedExperienceRanges;
    });
};


   // Filter jobs based on selected category, job types, and location
const filteredJobs = jobs.filter((job) => {
    const categoryMatch = selectedCategory === 'All Categories' || job.title === selectedCategory;
    const jobTypeMatch = selectedJobTypes.size === 0 || selectedJobTypes.has(job.jobType);
    // const locationMatch = selectedJobLocation === 'none' || job.location === selectedJobLocation;
    const experienceMatch = selectedExperienceRanges.size === 0 || selectedExperienceRanges.has(job.experienceRange);
    // const postedWithinMatch = selectedPostedWithin.has('Any') || selectedPostedWithin.has(job.timePosted);
    return categoryMatch && jobTypeMatch ;
});


// //job Location 
// const [selectedJobLocation, setSelectedJobLocation] = useState('none');
// //onChange
// const handleLocationChange = (event) => {
//     setSelectedJobLocation(event.target.value);
// };


//  //Job Experience
// const [selectedExperienceRanges, setSelectedExperienceRanges] = useState(new Set());
// //onchange(Handle Experience Range Change)
// const handleExperienceChange = (event) => {
//     const experienceRange = event.target.name;
//     setSelectedExperienceRanges((prev) => {
//       const newSelectedExperienceRanges = new Set(prev);
//       if (newSelectedExperienceRanges.has(experienceRange)) {
//         newSelectedExperienceRanges.delete(experienceRange);
//       } else {
//         newSelectedExperienceRanges.add(experienceRange);
//       }
//       return newSelectedExperienceRanges;
//     });
// };



// //Posted within
// const [selectedPostedWithin, setSelectedPostedWithin] = useState(new Set());
// //onchange(Handle posted within change)
//   const handlePostedWithinChange = (event) => {
//     const range = event.target.name;
//     setSelectedPostedWithin((prev) => {
//       const newSelectedPostedWithin = new Set(prev);
//       if (newSelectedPostedWithin.has(range)) {
//         newSelectedPostedWithin.delete(range);
//       } else {
//         newSelectedPostedWithin.add(range);
//       }
//       return newSelectedPostedWithin;
//     });
//   };


  return (
    <>
             {/* ------HEADER IMAGE-------- */}
        <div className="joblist-header">
            <img src='https://img.freepik.com/free-photo/portrait-professional-business-people-working-together_23-2150917186.jpg' alt="Header" className="joblist-image" />
            <div className="joblist-text">
                <h1>Get Your Job</h1>
            </div>
        </div>
        
             {/* -------FILTER PART---------- */}
        <div className="filter-bar">
            <div className="filter-jobs-xs">
                <i className="filter-icon">☰</i>
                <span>Filter Jobs</span>
            </div>
            <div className="job-count">
                <span>39,782 Jobs found</span>
            </div>
            <div className="sort-options">
                <label htmlFor="sort-by">Sort by</label>
                <select id="sort-by">
                    <option value="none">None</option>
                    <option value="job-list">Browse Jobs</option>
                    <option value="job-list">Saved Jobs</option>
                    <option value="job-list">Applied Jobs</option>
                    <option value="job-list">Recommended Jobs</option>
                </select>
            </div>
        </div>

            {/* -------Category---------- */}
        <div className='joblist-container'>
            <div className='joblist-content1'>
                    {/*Job Category */}
                <div className='joblist-main'>
                    <div className='joblist-category'>
                        <h2>Job Category</h2>
                    </div>
                    <div className='joblist-options'>
                        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="All Categories">All Categories</option>
                            <option value="Design & creative">Design & creative</option>
                            <option value="Design & Development">Design & Development</option>
                            <option value="Sales & Marketing">Sales & Marketing</option>
                            <option value="Mobile Application">Mobile Application</option>
                            <option value="Construction">Construction</option>
                            <option value="Information technology">Information technology</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Content writer">Content writer</option>
                        </select>
                    </div>
                </div>

                    {/* Job Type */}
                <div className="job-type-selector">
                        <h1>Job Type</h1>
                        {jobTypes.map((jobType, index) => (
                    <div key={index} className="job-type-option">
                        <input
                        type="checkbox"
                        id={`job-type-${index}`}
                        name={jobType}
                        onChange={handleJobTypeChange}
                        />
                        <label htmlFor={`job-type-${index}`}>{jobType}</label>
                    </div>
                        ))}
                </div>

                     {/* Job Location */}
                <div className='joblist-main'>
                    <div className='joblist-category'>
                        <h2>Job Location</h2>
                    </div>
                    <div className='joblist-location'>
                        {/* <select id="location" value={selectedJobLocation} onChange={handleLocationChange}> */}
                        <select>
                            <option value="none">Anywhere</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Greater Noida">Greater Noida</option>
                            <option value="Noida">Noida</option>
                            <option value="UK">UK</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Gurugaon">Gurugaon</option>
                            <option value="Banglore">Banglore</option>
                            <option value="Gujarat">Gujarat</option>
                        </select>
                    </div>
                </div>

                    {/* Experience */}
                <div className="job-experience-selector">
                    <h1>Experience</h1>
                    {experienceRanges.map((range, index) => (
                    <div key={index} className="experience-option">
                        <input
                            type="checkbox"
                            id={`experience-${index}`}
                            name={range}
                            onChange={handleExperienceChange}
                        />
                        <label htmlFor={`experience-${index}`}>{range}</label>
                    </div>
                    ))}
                </div>

                    {/* Posted Within */}
                <div className="job-experience-selector-rx">
                    <h1>Posted Within</h1>
                    {postedwithin.map((range, index) => (
                    <div key={index} className="experience-option">
                         <input
                            type="checkbox"
                            id={`posted-${index}`}
                            name={range}
                            // onChange={handlePostedWithinChange}
                            // checked={selectedPostedWithin.has(range)}
                        />
                        <label htmlFor={`posted-${index}`}>{range}</label>
                    </div>
                        ))}
                </div>

                    {/* Filter Jobs */}
                <div className="filter-jobs">
                    <h1 className='filter-jobs-heading'>Filter Jobs</h1>
                    <div className="price-filter">
                        <label htmlFor="price-range">Price: </label>
                        <input
                            type="range"
                            id="price-range"
                            min="0"
                            max="1000"
                            value={price}
                            onChange={handlePriceChange}
                            />
                        <span className="price-value">${price}</span>
                    </div>
                </div>
            </div>

                    {/*---------------JobCard------------- */}
            <div className='joblist-content2'>
                <div className="job-list">
                    {filteredJobs.map((job, index) => (
                <div className="job-card" key={index}>
                    <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
                <div className="job-details">
                    <h2 className="job-title">{job.title}</h2>
                <div className="job-company-location-salary">
                    <p className="job-company">{job.company}</p>
                    <p className="job-location">
                    <span role="img" aria-label="location"><IoLocationSharp /></span>
                    {job.location}
                    </p>
                    <p className="job-salary">{job.salary}</p>
                    <p className="job-salary">{job.experienceRange}</p>
                </div>
                </div>
                <div className="job-info">
                    <button className="job-type">{job.jobType}</button>
                    <p className="job-time">{job.timePosted}</p>
                </div>
                </div>
                    ))}
                </div>
            </div> 
           

        </div>
    </>
  )
}

export default JobListing;
